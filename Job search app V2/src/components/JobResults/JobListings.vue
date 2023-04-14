<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: { JobListing },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    currentPage() {
      console.log(this.$route);
      return Number.parseInt(this.$route.query.page || "1");
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
