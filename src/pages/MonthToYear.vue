<template>
  <div>
    <Navbar 
    :distributor_name="tables.outlet_name"
    :outlet_id="tables.outlet_id"
    :poin_tersedia="tables.poin_tersedia"
    />
    <div >
    <SliderMonth :bulan="tables.bulan">
    </div>
      <Periode />
      <div class="container mt-0">
      <Tables :tables="tables"/>
      </div>
  </div>
</template>

<script>
import Navbar from "../components/Month-To-Month-OutletFY/Navbar";
import SliderMonth from "../components/Month-To-Month-OutletFY/SliderMonth";
import Periode from "../components/Month-To-Month-OutletFY/Periode";
import Tables from "../components/Month-To-Month-OutletFY/Tables";
export default {
  components: {
    Navbar,
    SliderMonth,
    Periode,
    Tables,
  },
  props: ["title"],
  data() {
    return {
      year: {
        data: [],
      },
    };
  },
  computed: {
    tables() {
      return this.$store.state.tables;
    },
  },
  methods: {
    retails() {
      this.$store.dispatch("getDataRetails", {
        outlet_id: this.$route.params.outlet_id,
        thisBulan: this.$route.params.bulan,
      });
    },
  },
  created() {
    this.retails();
  },

  watch: {
    $route: "retails",
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
