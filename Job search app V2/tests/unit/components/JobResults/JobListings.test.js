import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";
import axios from "axios";

vi.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
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
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();
    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("it displayz max of 10 jobz", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    renderJobListings($route);

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
