<template>
  <div id="app">
    <router-view></router-view>
    <div
      v-if="
        $route.name != 'product' &&
          $route.name != 'rebate' &&
          $route.name != 'ewallet' &&
          $route.name != 'pulsa' &&
          $route.name != 'poincash' &&
          $route.name != 'login' &&
          $route.name != 'productdetail' &&
          $route.name != 'RebateDetails' &&
          $route.name != 'pointcashdetails' &&
          $route.name != 'PulsaDetails' &&
          $route.name != 'EwalletDetails' &&
          $route.name != 'SuccessPage'
      "
    >
      <Navigasi />
    </div>
  </div>
</template>

<script>
import Navigasi from "./components/Main-Component/Navigasi";
export default {
  name: "app",
  components: { Navigasi },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  },
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_URL);
  }
};
</script>
