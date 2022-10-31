import axios from "axious";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  it("fetchez jobz that candidtates can apply to", async () => {
    await getJobs();
  });
});
