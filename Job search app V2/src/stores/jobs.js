import { defineStore } from "pinia";
import getJobs from "@/api/getJobs";

export const FETCH_JOBS = "FETCH_JOBS";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobz = await getJobs();
      this.jobs = jobz;
    },
  },
});
