<template>
  <div class="container">
    <div id="tableJoss">
      <div class="row text-center rows-col-3 pt-3" slot="tableJoss">
        <div
          class="col bg-red text-white py-2 font16 font-weight-bold font-custom"
        >
          PAKET JOSS
        </div>
        <div
          class="table-bordered col-12 py-2"
          v-for="table in tables.data_bulan"
          :key="table"
        >
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-gray font-custom">AKTUAL PAKET JOSS 1</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN REWARD</h2>
            </div>
          </div>
          <div class="row text-center border-bottom">
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.aktual_paket_joss_1 }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.point_joss_1 }}
              </h2>
            </div>
          </div>
          <div class="row text-center pt-2">
            <div class="col">
              <h2 class="font12 text-gray font-custom">AKTUAL PAKET JOSS 2</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN REWARD</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.aktual_paket_joss_2 }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.point_joss_2 }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tableDisplay">
      <div class="row text-center rows-col-3 pt-3" slot="tableDisplay">
        <div
          class="col bg-red text-white py-2 font16 font-weight-bold font-custom"
        >
          FOTO DISPLAY
        </div>

        <div
          class="table-bordered col-12 py-2"
          v-for="table in tables.foto_display"
          :key="table"
        >
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-gray font-custom">STATUS FOTO</h2>
            </div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN REWARD</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-black font-weight-bolder">
                {{ table.status_foto }}
              </h2>
            </div>
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.poin_reward }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tableAkumulasi">
      <div class="row text-center rows-col-3 py-3 mb-5" slot="tableAkumulasi">
        <div
          class="col bg-grey text-white py-2 font16 font-weight-bold font-custom"
        >
          POIN AKUMULASI
        </div>

        <div
          class="table-bordered col-12 py-2"
          v-for="table in tables.data_poin"
          :key="table"
        >
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-gray font-custom">TOTAL POIN</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">PENUKARAN POIN</h2>
            </div>
          </div>
          <div class="row text-center border-bottom">
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.poin_perolehan }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font16 text-black font-weight-bolder">
                {{ table.poin_penukaran }}
              </h2>
            </div>
          </div>
          <div class="row text-center pt-2">
            <div class="col">
              <h2 class="font12 m-0 text-gray font-custom">POIN TERSEDIA</h2>
            </div>
            <div class="col">
              <h2 class="font16 m-0 text-black font-weight-bolder">
                {{ table.sisa_poin_tersedia }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tables"],
};
</script>

<style scoped>
.text-ungu {
  color: #41009a;
}

.bg-grey {
  background-color: #717173;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.bg-red {
  background-color: #ff5d24;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.margin-custom {
  margin-top: -2vh;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
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
.font16 {
  font-size: 16px;
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

  .font20 {
    font-size: 20px;
  }

  .font17 {
    font-size: 17px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
