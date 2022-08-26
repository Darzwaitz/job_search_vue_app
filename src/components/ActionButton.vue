<template>
  <button class="primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  // name here shows name in Vue devtoolz
  name: "ActionButton",
  props: ["text"],
};
</script>

<style scoped>
button {
  /* tailwind @apply here*/
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
</style>
