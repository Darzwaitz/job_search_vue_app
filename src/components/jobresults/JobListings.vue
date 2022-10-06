<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/jobresults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/jobs").then((response) => {
      this.jobs = response.data;
    });
  },
};
</script>
