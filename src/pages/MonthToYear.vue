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
      title="PENJUALAN YEAR TO MONTH"
      class="mt-custom"
      :historikal="year.total_historikal_penjualan"
      :aktual="year.total_aktual_penjualan"
      :selisih_penjualan="year.total_selisih_penjualan"
      :target_penjualan="year.total_target_penjualan"
      :ratio="year.total_ratio_pencapaian"
    />
    <Poin
      :contentFor="'MonthToYear'"
      :poin_carry_over="year.poin_carry_over"
      :perolehan="year.total_perolehan"
      :poin_tersedia="year.total_poin_tersedia"
      :penukaran_poin="year.total_penukaran_poin"
      :sisa_poin="year.sisa_point"
      title="POIN YEAR TO MONTH"
      class="mt-3"
    />
    <Tarif
      :contentFor="'MonthToYear'"
      :rebate_medio="year.total_rebate_medio"
      :rebate_bulanan="year.total_rebate_bulanan"
      :tarif_medio="year.tarif_rebate_medio"
      :tarif_bulanan="year.tarif_rebate"
      :transfer_rebate="year.total_transfer_rebate"
      :total_rebate="year.total_rebate"
      :tarif_rebate_quarter="year.tarif_rebate_quarter"
      :rebate_quarter="year.total_rebate_quarter"
      :saldo_rebate="year.saldo_rebate"
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
    Tarif,
  },
  data() {
    return {
      year: {
        data: [],
      },
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },

    monthToYear() {
      axios
        .get(`${process.env.VUE_APP_URL}dashboard-outlet-mty`, {
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
            token: localStorage.token,
          },
        })

        .then((res) => (this.year = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.monthToYear();
  },
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
    margin-top: 22vh;
  }
}
</style>
