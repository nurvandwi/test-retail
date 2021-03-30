<template>
  <div class="container">
    <div
      class="row text-center rows-col-3 py-3 margin-custom"
      v-if="contentFor === 'table-penjualan'"
    >
      <div class="col bg-blue text-white py-2 font-custom">
        {{ title }}
      </div>
      <div class="table-bordered col-12 py-2">
        <div class="row text-center">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font14 text-black font-weight-bolder">Rp 0</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">Rp 0</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              RATIO PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font14 text-black font-weight-bolder">Rp 0</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">0 %</h2>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------>
    <div
      class="row text-center rows-col-3 py-3 margin-custom"
      v-if="contentFor === 'AO'"
    >
      <div class="col bg-blue text-white py-2 font-custom">
        {{ title }}
      </div>
      <div class="table-bordered col-12 py-2">
        <div class="row text-center">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font10 text-gray font-custom font-weight-bolder">AO</h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">RO</h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right: 1px solid #d3d3d3">
            <h2 class="font14 text-black font-weight-bolder">0</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">0</h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10 align-self-center">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              AO/RO
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">0 %</h2>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------>
    <div class="row text-center mb-quarter" v-if="contentFor === 'Total'">
      <div class="col-12 table-top col-md-12 bg-blue d-flex px-1">
        <div
          class="font12 p-0 text-white text-center border-right col-sm-6 col-6 py-2"
        >
          TYPE KPI
        </div>
        <div
          class="p-0 font12 text-white border-right text-center col-sm-6 col-6 py-2"
        >
          POIN
        </div>
      </div>
      <div class="col-12 table-bordereds rounded-bottom">
        <div class="row mt-2">
          <div class="col-6 col-md-6 px-0 p-0">
            <h2
              class="font12 col-12 px-1 text-gray text-left font-weight-bolder"
            >
              KPI SELL IN
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 font-weight-bolder">0</h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 col-md-06 px-0">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              KPI SELL OUT
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 position-relative font-weight-bolder">0</h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 col-md-06 px-0">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              HERO CATEGORY
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 position-relative font-weight-bolder">0</h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-6 col-md-06 px-0">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              AO/RO
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 text-black font-weight-bolder">0</h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 col-md-06 px-0">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              AO/JOSS
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 position-relative font-weight-bolder text-gray">
              0
            </h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-6 col-md-06 px-0">
            <h2
              class="font12 px-1 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              TOTAL POIN
            </h2>
          </div>
          <div class="col-6 col-md-6 text-center">
            <h2 class="font12 position-relative font-weight-bolder">0</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contentFor', 'title']
}
</script>

<style scoped>
.text-ungu {
  color: #41009a;
}

.bg-blue {
  background-color: #6a813d;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.margin-custom {
  margin-top: -13vh;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordereds {
  border: 1px solid #6a813d;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}

.text-blue {
  color: #7fceeb;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}

.font10 {
  font-size: 10px;
}

.font12 {
  font-size: 12px;
}

.font13 {
  font-size: 13px;
}

.font14 {
  font-size: 14px;
}

.mb-quarter {
  margin-bottom: 7rem;
}
.rounded {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .margin-custom {
    margin-top: -2vh;
  }
}
</style>
