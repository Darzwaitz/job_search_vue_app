<template>
  <job-filters-sidebar></job-filters-sidebar>
  <job-listings></job-listings>
</template>

<script>
import JobFiltersSidebar from "@/components/jobresults/jobfilterssidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/jobresults/JobListings.vue";

export default {
  name: "JobResultzView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
