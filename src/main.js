import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

createApp(App).use(router);

App.use(VueGtag, {
    config: { id: "G-H7GMWHW01W" },
    appName: "Phoenix Website",
    pageTrackerScreenviewEnabled: true,
    });

App.mount("#app");

