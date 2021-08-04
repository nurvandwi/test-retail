<template>
  <div>
    <div
      class="card mt-3 shadow-lg mx-auto max-height-width"
      :style="style"
      v-for="voucher in dataVouchers"
      :key="voucher"
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
        <div class="col-7">
          <div class="font-weight-thin text-white" style="font-size: 12px">
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
        <div class="col-5 mb-3 ml-0">
          <div
            class="float-left text-center"
            style="
              background: white;
              padding: 5px;
              border-radius: 11px;
              font-size: 12px;
            "
          >
            <span style="font-size: 12px">Kode Voucher </span>
            {{ voucher.kode_qr }}
            <span> {{ voucher.tgl_scan }}</span>
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
          "https://pzc.inosis.id/api_pzc_retail_2021/api.php/list-qr-terpakai_rtl",
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
    style() {
      return "background-image: " + this.color;
    },
  },
};
</script>

<style scoped>
.max-height-width {
  max-width: 342px;
  max-height: 34vh;
}
</style>