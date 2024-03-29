import { createPinia, setActivePinia } from "pinia";
// import axios from "axios";

vi.mock("axios");

import { useJobsStore } from "@/stores/jobs";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("storez job listingz", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

// describe("actions", () => {
//   beforeEach(() => {
//     setActivePinia(createPinia);
//   });

//   describe("FETCH_JOBS", () => {
//     it("makes API request and storez received jobz", async () => {
//       axios.get.mockResolvedValue({ data: ["Job 1", "Job 2"] });
//       const store = useJobsStore();
//       await store.FETCH_JOBS();
//       expect(store.jobs).toEqual(["Job 1", "Job 2"]);
//     });
//   });
// });
