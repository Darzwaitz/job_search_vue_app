<template>
  <img
    :src="imageLink"
    alt="Profile picture"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "./assets/imgs/profile-pic-pexels.jpg",
    };
  },
};
</script>
