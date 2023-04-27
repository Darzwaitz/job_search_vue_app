import { createPinia, setActivePinia } from "pinia";

import useJobsStore from "@/stores/jobs";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("storez job listingz", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});
