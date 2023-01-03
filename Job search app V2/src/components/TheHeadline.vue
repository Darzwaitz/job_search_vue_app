<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next projekt</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "Hay",
    };
  },
  created() {
    console.log("created hook existz", this.sample);
  },
};
</script>
