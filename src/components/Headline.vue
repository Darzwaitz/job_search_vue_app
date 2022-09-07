<template>
  <section>
    <h1>build for everyone</h1>
    <h2>Find your next job..</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      sample: "Hello",
    };
  },
  created() {
    console.log("Created hook: ", this.sample);
  },
};
</script>
