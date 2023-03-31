<template>
  <job-filters-sidebar></job-filters-sidebar>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
  },
};
</script>
