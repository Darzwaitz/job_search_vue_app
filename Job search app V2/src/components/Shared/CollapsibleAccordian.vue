<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      @click="open"
    ></div>

    <div v-if="isOpen" class="">Child</div>
  </div>
</template>

<script>
export default {
  name: "CollapsibleAccordian",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
