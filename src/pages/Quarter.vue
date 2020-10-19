<template>
  <div class="container">
    <Quarter
            :sisa_point="points.sisa_point"
            :nama_outlet="points.outlet_name"
            :id_outlet="points.outlet_id"
            :contentFor="'Quarter'"
    />
    <DetailPenjualan
            title="PENJUALAN PER QUARTER"
            class="mt-custom"
            :target_bulanan="points.total_target"
    />
    <Poin title="POIN PER QUARTER" class="mt-3" />
    <Tarif title class="mt-3" />
    <BulanTransaksi />
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
        points: {
          data: [],
          data_rebate: [],
        },
      };
    },
    methods: {
      normalize(badNumeric) {
        return Number(badNumeric.split(",").join(""));
      },
    },
    mounted() {
      axios
              .get("http://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet", {
                headers: {
                  version: this.$route.params.version,
                  bulan: this.$route.params.bulan,
                },
                params: {
                  txtKodeOutlet: this.$route.params.outlet_id,
                  token: localStorage.token,
                },
              })

              .then((res) => (this.points = res.data))
              .catch((err) => console.log(err));
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
      margin-top: 41vh;
    }
  }
</style>
