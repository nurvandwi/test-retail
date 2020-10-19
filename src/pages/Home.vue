<template>
  <div>
    <Header
      :contentFor="'home'"
      :outlet_name="OutletData.outlet_name"
      :outlet_point="OutletData.Poin"
      :outlet_rebate="OutletData.Rebate"
    />
    <PromoBanner :slider="Slider" />
    <ListPromosi />
    <ListTransaksi class="mb-5 pb-5" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Main-Component/Header.vue";
import PromoBanner from "../components/Main-Component/PromoBanner.vue";
import ListTransaksi from "../components/Main-Component/ListTransaksi";
import ListPromosi from "../components/Main-Component/ListPromosi.vue";

export default {
  components: {
    Header,
    PromoBanner,
    ListPromosi,
    ListTransaksi
  },
  data() {
    return {
      OutletData: {
        data: []
      },
      AllTransaction: {
        data: []
      },
      Slider: {
        data: []
      }
    };
  },
  mounted() {
    this.getOutlet();
    this.getAllTransaction();
    this.getSlider();
  },
  methods: {
    getSlider() {
      axios

        .get("https://www.inosis.co.id/mv_demo_api/api.php/banner", {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.Slider = res.data))
        .catch(err => console.log(err));
    },
    getOutlet() {
      axios
        .get(
          "https://www.inosis.co.id/mv_demo_api/api.php/status-poin-rebate",
          {
            params: {
              outlet_id: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )
        .then(res => (this.OutletData = res.data.data))
        .catch(err => console.log(err));
    },
    getAllTransaction() {
      axios
        .get("https://www.inosis.co.id/mv_demo_api/api.php/view_transaksi", {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.AllTransaction = res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
