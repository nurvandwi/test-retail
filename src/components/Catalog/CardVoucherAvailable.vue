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
        <div class="col-4 mb-4 px-5">
          <div class="popover__wrapper text-center">
            <a href="#">
              <vue-qrcode width="40" :value="voucher.kode_qr" />
            </a>
            <div class="popover__content">
              <vue-qrcode width="250" :value="voucher.kode_qr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import axios from "axios";
export default {
  props: ["color"],
  components: {
    VueQrcode,
  },
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
  min-height: 27vh;
}

a {
  text-decoration: none;
}

.popover__title {
  font-size: 24px;
  line-height: 36px;
  text-decoration: none;
  color: rgb(228, 68, 68);
  text-align: center;
  padding: 15px 0;
}

.popover__wrapper {
  position: relative;

  display: inline-block;
}
.popover__content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  right: 0;
  transform: translate(0, 10px);
  background-color: #bfbfbf;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
  top: 0;
}

.popover__wrapper:hover .popover__content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
</style>
