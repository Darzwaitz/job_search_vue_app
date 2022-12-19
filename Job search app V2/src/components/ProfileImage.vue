<template>
  <img
    :src="imageLink"
    alt="Profile image"
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://external-preview.redd.it/hdmtNmkhbJ0UqWxEECNNPIpN4ZT5bCc9aoHdW4bufyI.jpg?auto=webp&s=1a50f965f396b565e1c7b77af94a81d27fe407d0",
    };
  },
};
</script>
