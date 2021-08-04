<template>
  <div class="container mt-3 mb-5">
    <div
      class="card shadow-lg mx-auto max-width bg_custom my-3"
      :style="backgroundColor"
      v-for="voucher in dataVouchers"
      :key="voucher"
      v-show="voucher.tgl_scan === null"
    >
      <div class="container">
        <div class="row text-white">
          <div class="col-8 p-3">
            <h6 class="m-0">Voucher Cashback</h6>
            <p class="font-weight-bold m-0" style="font-size: 18px">
              {{ voucher.nama_produk }}
            </p>
          </div>
          <div class="col-4 pt-3 pl-4">
            <img height="30" src="../../assets/pz.png" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-8">
          <div class="font-weight-thin text-white" style="font-size: 13px">
            {{ voucher.outlet_id }} - {{ voucher.outlet_name }}
          </div>
          <div
            class="font-weight-bold float-left text-white py-2"
            style="font-size: 12px"
          >
            Periode:
            <span class="font-weight-bold"> {{ voucher.periode }}</span>
          </div>
        </div>
        <div class="col-4 mb-4 pl-4">
          <div class="text-center">
            <expandable-image
              width="55"
              :src="require('../../assets/qr-retail.png')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["color"],
  data() {
    return {
      dataVouchers: [],
    };
  },
  methods: {
    getVoucher() {
      axios
        .get(
          "https://pzc.inosis.id/api_pzc_retail_2021/api.php/list-qr-tersedia_rtl",
          {
            headers: {
              token: localStorage.token,
            },
            params: {
              page: this.$route.params.page,
            },
          }
        )
        .then((res) => {
          this.dataVouchers = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getVoucher();
  },
  computed: {
    backgroundColor() {
      return `background-image: ${this.color}`;
    },
  },
};
</script>

<style scoped>
.max-width {
  max-width: 342px;
}

.expandable-image.expanded /deep/ {
  background: white !important;
}

.expandable-image /deep/ img {
  width: 75% !important;
}

.expandable-image.expanded /deep/ img {
  width: 50% !important;
}
</style>