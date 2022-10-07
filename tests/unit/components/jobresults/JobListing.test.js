import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/jobresults/JobListing.vue";

describe("JobListing", () => {
  it("renders job title", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          title: "Vue developer",
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toMatch("Vue developer");
  });

  it("renders job organisation", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          organization: "AirBnB",
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toMatch("AirBnB");
  });
});
