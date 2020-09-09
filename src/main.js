import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ImageUploader from 'vue-image-upload-resize'
Vue.config.productionTip = false;
Vue.use(ImageUploader);
new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
