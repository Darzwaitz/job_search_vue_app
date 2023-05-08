<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"> </slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "SpotLight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotLights`;
    const response = await axios.get(url);
    this.spotLights = response.data;
  },
};
</script>
