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

  it("renderz job organization", () => {
    const jobProps = createJobProps({ organization: "Samsung" });

    renderJobListing(jobProps);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });

  it("renderz job locationz", () => {
    const jobProps = createJobProps({ locations: ["Dublin", "Glasgow"] });

    renderJobListing(jobProps);

    expect(screen.getByText("Dublin")).toBeInTheDocument();
    expect(screen.getByText("Glasgow")).toBeInTheDocument();
  });

  it("renderz job qualificationz", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });

    renderJobListing(jobProps);

    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Develop")).toBeInTheDocument();
  });
});
