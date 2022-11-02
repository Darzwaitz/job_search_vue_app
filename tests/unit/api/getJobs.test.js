import axios from "axious";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  it("fetchez jobz that candidtates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://temp.com/jobs");
  });

  it("extracts jobz from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: "Java Engineer",
      },
    ]);
  });
});
