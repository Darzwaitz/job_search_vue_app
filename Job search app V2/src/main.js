import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import magnifying glass
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "@/index.css"; // neccessary for tailwind
import router from "@/router";
import App from "@/App.vue";

library.add(faSearch);

const pinia = createPinia;

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
