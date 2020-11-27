<template>
  <div class="container">
    <Quarter
      :contentFor="'MonthToMonth'"
      :sisa_point="month.sisa_point"
      :bulan="month.bulan"
      :nama_outlet="month.outlet_name"
      :id_outlet="month.outlet_id"
      :saldo_rebate="month.saldo_rebate"
    />
    <DetailPenjualan
      :contentFor="'monthToMonth'"
      title="AKUMULASI PENJUALAN"
      class="mt-custom"
      :historikal="month.total_historikal_penjualan"
      :target_penjualan="month.total_target_penjualan"
      :aktual="month.total_aktual_penjualan"
      :selisih_penjualan="month.total_selisih_penjualan"
      :ratio="month.total_ratio_pencapaian"
    />
    <Poin
      :contentFor="'monthToMonth'"
      :poin_carry_over="month.poin_carry_over"
      :perolehan="month.total_perolehan"
      :poin_tersedia="month.total_poin_tersedia"
      :penukaran_poin="month.total_penukaran_poin"
      :sisa_poin="month.sisa_point"
      title="AKUMULASI POIN"
      class="mt-3"
    />
    <Tarif
      :contentFor="'monthToMonth'"
      :rebate_medio="month.total_rebate_medio"
      :rebate_bulanan="month.total_rebate_bulanan"
      :tarif_medio="month.tarif_rebate_medio"
      :tarif_bulanan="month.tarif_rebate"
      :transfer_rebate="month.total_transfer_rebate"
      :total_rebate="month.total_rebate"
      :tarif_quarter="month.tarif_rebate_quarter"
      :rebate_quarter="month.total_rebate_quarter"
      :saldo_rebate="month.saldo_rebate"
      title
      class="mt-3 mb-custom"
    />
    <!--      <BulanTransaksi :contentFor="'monthToMonth'"/>-->
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
import Quarter from "@/components/Quarter/Quarter.vue";
import DetailPenjualan from "@/components/Quarter/DetailPenjualan.vue";
import Poin from "@/components/Quarter/Poin.vue";
// import BulanTransaksi from "@/components/Quarter/BulanTransaksi.vue";
import Tarif from "@/components/Quarter/Tarif.vue";

export default {
  components: {
    Quarter,
    DetailPenjualan,
    Poin,
    // BulanTransaksi,
    Tarif,
  },
  data() {
    return {
      month: {
        data: [],
      },
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },

    monthToMonth() {
      axios
        .get(`${process.env.VUE_APP_URL}dashboard-outlet-mtm`, {
          headers: {
            bulan: this.$route.params.bulan,
          },
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
            token: localStorage.token,
          },
        })

        .then((res) => (this.month = res.data))
        .catch((err) => console.log(err));
    },
  },
  // mounted() {
  //     this.monthToMonth();
  // }
  created() {
    this.monthToMonth();
  },
  watch: {
    $route: "monthToMonth",
  },
};
</script>

<style scoped>
.mb-custom {
  margin-bottom: 5rem;
}

.mt-custom {
  margin-top: 2rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mt-custom {
    margin-top: 31vh;
  }
}
</style>
