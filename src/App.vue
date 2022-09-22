<template>
  <div class="">
    <router-link to="/">Home</router-link>
    <router-link to="/jobs/results">Job Resultz</router-link>
  </div>
  <router-view data="note-this is a global component" />
</template>

<script>
export default {
  name: "App",
};
</script>
