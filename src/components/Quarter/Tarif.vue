<template>
  <div class="container ">
    <div class="row text-center mb-quarter" v-if="contentFor === 'Quarter'">
      <div class="col-12 table-top col-md-12 bg-blue d-flex px-1 "  v-if="points.REBATE=='true'">
        <div
          class="font12 p-0 text-white text-center border-right col-sm-4 col-4 py-2"
        >
          TYPE REBATE
        </div>
        <div
          class="p-0 font12 text-white text-center border-right col-sm-5 col-5 py-2"
        >
          NILAI REBATE
        </div>
        <div class="font12 text-white col-sm-3 col-3 px-4 py-2 text-center">
          TARIF
        </div>
      </div>
      <div class="col-12 table-bordereds rounded-bottom ">
        <div class="row mt-2  border-bottom">
          <div class="col-4 col-md-4 px-0 p-0">
            <h2
              class="font12 col-12 text-gray px-1 text-left  font-weight-bolder"
            >
              Rebate Medio
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatPrice(rebate_medio) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatRebate(tarif_medio) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Bulanan
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_bulanan) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_bulanan) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Quarter
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_quarter) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_quarter) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Total Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 text-black font-weight-bolder">
              {{ formatPrice(total_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-danger font-weight-bolder"
            >
              Transfer Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder text-danger">
              {{ formatPrice(transfer_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Saldo Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder ">
              {{ formatPrice(saldo_rebate) }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center" v-if="contentFor === 'MonthToYear'">
      <div class="col-12 table-top col-md-12 bg-blue d-flex px-1" v-if="points.REBATE=='true'">
        <div
          class="font12 p-0 text-white text-center border-right col-sm-4 col-4 py-2"
        >
          TYPE REBATE
        </div>
        <div
          class="p-0 font12 text-white text-center border-right col-sm-5 col-5 py-2"
        >
          NILAI REBATE
        </div>
        <div class="font12 text-white col-sm-3 text-center col-3 px-4 py-2">
          TARIF
        </div>
      </div>
      <div class="col-12 table-bordereds rounded-bottom ">
        <div class="row mt-2  border-bottom">
          <div class="col-4 col-md-4 px-0 p-0">
            <h2
              class="font12 col-12 text-gray text-left px-1  font-weight-bolder"
            >
              Rebate Medio
            </h2>
          </div>
          <div class="col-5 col-md-5  text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatPrice(rebate_medio) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatRebate(tarif_medio) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 col-12 font-custom px-1 text-left text-gray font-weight-bolder"
            >
              Rebate Bulanan
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_bulanan) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_bulanan) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 col-12 font-custom px-1 text-left text-gray font-weight-bolder"
            >
              Rebate Quarter
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_quarter) }}
            </h2>
          </div>
          <div class="col-3 col-md-3 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_rebate_quarter) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Total Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 text-black font-weight-bolder">
              {{ formatPrice(total_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-danger font-weight-bolder"
            >
              Transfer Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder text-danger">
              {{ formatPrice(transfer_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Saldo Rebate
            </h2>
          </div>
          <div class="col-5 col-md-5 text-center">
            <h2 class="font12 position-relative font-weight-bolder ">
              {{ formatPrice(saldo_rebate) }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center mb-quarter" v-if="contentFor === 'monthToMonth'">
      <div class="col-12 table-top col-md-12 bg-blue d-flex px-1" v-if="points.REBATE=='true'">
        <div
          class="font12 p-0 text-white text-center border-right col-sm-4 col-4 py-2"
        >
          TYPE REBATE
        </div>
        <div
          class="p-0 font12 text-white border-right text-center col-sm-5 col-5 py-2"
        >
          NILAI REBATE
        </div>
        <div class="font12 text-white col-sm-3 col-3 px-4 py-2 text-center">
          TARIF
        </div>
      </div>
      <div class="col-12 table-bordereds rounded-bottom ">
        <div class="row mt-2  border-bottom">
          <div class="col-4 col-md-4 px-0 p-0">
            <h2
              class="font12 col-12 px-1 text-gray text-left  font-weight-bolder"
            >
              Rebate Medio
            </h2>
          </div>
          <div class="col-5 col-md-4  text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatPrice(rebate_medio) }}
            </h2>
          </div>
          <div class="col-3 col-md-4 text-center">
            <h2 class="font12 font-weight-bolder">
              {{ formatRebate(tarif_medio) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Bulanan
            </h2>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_bulanan) }}
            </h2>
          </div>
          <div class="col-3 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_bulanan) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Quarter
            </h2>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatPrice(rebate_quarter) }}
            </h2>
          </div>
          <div class="col-3 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              {{ formatRebate(tarif_quarter) }} %
            </h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Total Rebate
            </h2>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h2 class="font12 text-black font-weight-bolder">
              {{ formatPrice(total_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-danger font-weight-bolder"
            >
              Transfer Rebate
            </h2>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder text-danger">
              {{ formatPrice(transfer_rebate) }}
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 px-0 ">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Saldo Rebate
            </h2>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder ">
              {{ formatPrice(saldo_rebate) }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "contentFor",
    "rebate_medio",
    "rebate_bulanan",
    "total_rebate",
    "tarif_bulanan",
    "tarif_medio",
    "transfer_rebate",
    "tarif_quarter",
    "tarif_rebate_quarter",
    "rebate_quarter",
    "saldo_rebate",
  ],
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatTarif(value) {
      const val = (value / 1).toFixed(0).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatRebate(value) {
      const val = (value / 1).toFixed(2).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted () {
    this.$store.dispatch('getPoin', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
  },
  computed:{
    points () {
      console.log(this.$store.state.points, 'dari tarif')
      return this.$store.state.points
    }
  }
};
</script>

<style scoped>
  .mb-quarter{
    margin-bottom: 7rem;
  }
.rounded {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.table-top {
  border: 1px solid #6a813d;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.table-bordereds {
  border: 1px solid #6a813d;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}

.text-gray {
  color: #6c757d;
}

.font10 {
  font-size: 10px;
}

.font12 {
  font-size: 12px;
}

.font14 {
  font-size: 14px;
}

.font13 {
  font-size: 13px;
}

.bg-blue {
  background-color: #6a813d;
}

.text-blue {
  color: #68cdff;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
