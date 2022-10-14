import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/jobresults/JobListings.vue";

describe("JobListings", () => {
  it("fetchez jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = {
      query: {
        page: "1",
      },
    };

    shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("createz a job listing for a maximum of 10 jobz", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: "1",
      },
    };

    const wrapper = shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
