// import { render, screen } from "@testing-library/vue";
import { render } from "@testing-library/vue";

import JobListings from "@/components/JobResults/JobListings.vue";
import axios from "axios";

vi.mock("axios");

describe("JobListings", () => {
  it("fetchez jobz", () => {
    axios.get.mockResolvedValue({ data: [] });
    render(JobListings);
    expect(axios.get).toHaveBeenLastCalledWith("http://localhost:3000/jobs");
  });
});
