import { render, screen } from "@testing-library/vue";

import JobListing from "@/components/JobResults/JobListing.vue";
import { RouterLinkStub } from "@vue/test-utils";

describe("JobListing", () => {
  it("renderz job title", () => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });
    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });

  it("renderz job qualification", () => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          organization: "AirBnB",
        },
      },
    });
    expect(screen.getByText("AirBnB")).toBeInTheDocument();
  });
});
