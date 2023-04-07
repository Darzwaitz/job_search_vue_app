import { render, screen } from "@testing-library/vue";

import JobListing from "@/components/JobResults/JobListing.vue";
import { RouterLinkStub } from "@vue/test-utils";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    ...jobProps,
  });

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProps,
        },
      },
    });
  };

  it("renderz job title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    renderJobListing(jobProps);
    expect(screen.getByText("Vue Programmer")).toBeInTheDocument();
  });

  it("renderz job qualification", () => {
    const jobProps = createJobProps({ organization: "Samsung" });

    renderJobListing(jobProps);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });
});
