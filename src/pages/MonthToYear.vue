<template>
  <div class="container">
    <Quarter
      :contentFor="'MonthToYear'"
      :sisa_point="year.sisa_point"
      :nama_outlet="year.outlet_name"
      :id_outlet="year.outlet_id"
      :saldo_rebate="year.saldo_rebate"
    />
    <DetailPenjualan
      :contentFor="'MonthToYear'"
      title="PENJUALAN PER QUARTER"
      class="mt-custom"
      :historikal="year.total_last"
      :aktual="year.total_sales"
      :selisih_penjualan="year.selisih_sales"
      :target_penjualan="year.total_target"
    />
    <Poin
      :contentFor="'MonthToYear'"
      :poin_carry_over="year.poin_carry_over"
      :perolehan="year.total_achv"
      :poin_tersedia="year.sisa_point"
      :penukaran_poin="year.total_redeem"
      title="POIN PER QUARTER"
      class="mt-3"
    />
    <Tarif
      :contentFor="'MonthToYear'"
      :rebate_medio="year.total_rebate_medio"
      :rebate_bulanan="year.total_rebate"
      :tarif_medio="year.tarif_rebate_medio"
      :tarif_bulanan="year.tarif_rebate"
      :total_rebate="year.total_rebate + year.total_rebate_medio"
      title
      class="mt-3"
    />
    <BulanTransaksi :contentFor="'MonthToYear'" />
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
      year: {
        data: []
      }
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },

    monthToYear() {
      axios
        .get(
          "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mty",
          {
            params: {
              txtKodeOutlet: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )

        .then(res => (this.year = res.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.monthToYear();
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
