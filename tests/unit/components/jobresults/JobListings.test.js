import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/jobresults/JobListings.vue";

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset();
  });

  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("fetchez jobs", () => {
    const $route = createRoute();

    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("createz a job listing for a maximum of 10 jobz", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);

    const wrapper = shallowMount(JobListings, createConfig($route));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
});
