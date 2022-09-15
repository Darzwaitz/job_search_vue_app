<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  // name here shows name in Vue devtoolz
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      // 'validator' is fixed Vue syntax
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        // primary: this.type === "primary",
        // secondary: this.type === "secondary",
        // refactored
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  /* tailwind @apply here*/
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
