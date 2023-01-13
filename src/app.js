import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { appAxios } from "./utils/appAxios.js";
import "@/front/assets/font-awesome/css/all.css"
import '@/front/assets/css/style.scss'
import '@/front/assets/css/app.css'
import sideBar from "./components/shared/sideBar.vue"
import headTop from "./components/shared/headTop.vue"

const app = createApp(App);
app.config.globalProperties.$appAxios = appAxios;
app.component("sideBar", sideBar);
app.component("headTop", headTop);
app.provide("appAxios", appAxios);
app.use(router);
app.use(store);
app.mount("#app");
