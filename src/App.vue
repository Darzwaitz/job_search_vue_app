<template>
  <div class="">
    <main-nav />
    <router-view data="note-this is a global component" />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
