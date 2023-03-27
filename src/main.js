import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import store from "./store/index";

createApp(App).use(store).mount("#app");
