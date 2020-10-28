<template>
  <div class="container">
    <Quarter
      :contentFor="'MonthToMonth'"
      :sisa_point="month.sisa_point"
      :nama_outlet="month.outlet_name"
      :id_outlet="month.outlet_id"
      :saldo_rebate="month.saldo_rebate"
    />
    <DetailPenjualan
      :contentFor="'monthToMonth'"
      title="PENJUALAN PER QUARTER"
      class="mt-custom"
      :historikal="month.total_last"
      :aktual="month.total_sales"
      :selisih_penjualan="month.selisih_sales"
      :target_penjualan="month.total_target"
    />
    <Poin
      :contentFor="'monthToMonth'"
      :poin_carry_over="month.poin_carry_over"
      :perolehan="month.total_achv"
      :poin_tersedia="month.sisa_point"
      :penukaran_poin="month.total_redeem"
      title="POIN PER QUARTER"
      class="mt-3"
    />
    <Tarif
      :contentFor="'monthToMonth'"
      :rebate_medio="month.total_rebate_medio"
      :rebate_bulanan="month.total_rebate"
      :tarif_medio="month.tarif_rebate_medio"
      :tarif_bulanan="month.tarif_rebate"
      :total_rebate="month.total_rebate + month.total_rebate_medio"
      title
      class="mt-3"
    />
    <BulanTransaksi :contentFor="'monthToMonth'" />
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
import Quarter from "@/components/Quarter/Quarter.vue";
import DetailPenjualan from "@/components/Quarter/DetailPenjualan.vue";
import Poin from "@/components/Quarter/Poin.vue";
import BulanTransaksi from "@/components/Quarter/BulanTransaksi.vue";
import Tarif from "@/components/Quarter/Tarif.vue";

export default {
  components: {
    Quarter,
    DetailPenjualan,
    Poin,
    BulanTransaksi,
    Tarif
  },
  data() {
    return {
      month: {
        data: []
      }
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },

    monthToMonth() {
      axios
        .get(
          "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mtm",
          {
            headers: {
              version: this.$route.params.bulan
            },
            params: {
              txtKodeOutlet: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )

        .then(res => (this.month = res.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.monthToMonth();
  }
};
</script>

<style scoped>
.mb-custom {
  margin-bottom: 4rem;
}

.mt-custom {
  margin-top: 2rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mt-custom {
    margin-top: 26vh;
  }
}
</style>
