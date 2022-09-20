<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    handleInput($event) {
      // this.value = $event.target.value;
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
