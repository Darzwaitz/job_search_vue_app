<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">temp title</slot>
      <br />
      <slot name="subtitle">temp subtitle</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContainer",
};
</script>
