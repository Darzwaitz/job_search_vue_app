import axios from "axios";

import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Python Engineer",
        },
      ],
    });
  });

  it("fetchez jobz candidatez can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytestsite.com/jobs");
  });

  it("extractz jobz from response", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([
      {
        id: 1,
        title: "Python Engineer",
      },
    ]);
  });
});
