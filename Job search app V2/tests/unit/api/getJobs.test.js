import axios from "axios";

import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getJobs", () => {
  it("fetchez job candidatez can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytestsite.com/jobs");
  });
});
