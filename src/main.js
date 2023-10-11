import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

createApp(App).use(router).use(VueGtag, {
    config: { id: "G-C2J0F5J9DR" },
    appName: "Phoenix Website Live",
    pageTrackerScreenviewEnabled: true,
    }).mount("#app");

