import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/style.scss";

createApp(App).use(router).mount("#app");
