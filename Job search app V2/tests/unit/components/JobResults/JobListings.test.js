import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import JobListings from "@/components/JobResults/JobListings.vue";
// import { createPinia } from "pinia";
import { useJobsStore } from "@/stores/jobs";

vi.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia();

    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetchez jobz", () => {
    const $route = createRoute();
    renderJobListings($route);

    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("it displayz max of 10 jobz", async () => {
    // axios.get.mockResolvedValue({ data: Array(10).fill({}) });

    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    renderJobListings($route);

    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(10).fill({});

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when paramz exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 1")).toBeInTheDocument();
    });
  });

  describe("when paramz include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 3")).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", {
        name: /previous/i,
      });
      expect(previousLink).not.toBeInTheDocument();
    });

    it("showz link to the next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      // screen.debug(); USE FOR OUTPUTTING THE WHOLE HTML PAGE OF ELEMENTS
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", {
        name: /next/i,
      });
      expect(nextLink).not.toBeInTheDocument();
    });
  });
});
