import { createPinia, setActivePinia } from "pinia";

import useJobsStore from "@/stores/jobs";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
});
