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

  describe("when user is on the first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job resultz", () => {
    it("does not show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("showz link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
