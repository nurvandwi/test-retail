<template>
  <div class="container">
    <div class="row text-center rows-col-3" v-if="contentFor === 'Quarter'">
      <div class="col bg-blue text-white py-2 font-custom">{{ title }}</div>
      <div class="table-bordered col-12">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              HISTORIKAL PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(historikal) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2
              class="font14  font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              Rp {{ formatPrice(selisih_penjualan) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              RATIO PENCAPAIAN
            </h2>
          </div>
          <div class="col">
            <h2
              class="font14 text-black font-custom font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              {{ formatPrice(selisih_penjualan) }} %
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (STATUS SUKSES >= 100%, GAGAL < 100%)
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center rows-col-3" v-if="contentFor === 'MonthToYear'">
      <div class="col bg-blue text-white py-2 font-custom">{{ title }}</div>
      <div class="table-bordered col-12">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              HISTORIKAL PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(historikal) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2
              class="font14  font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              Rp {{ formatPrice(selisih_penjualan) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              RATIO PENCAPAIAN
            </h2>
          </div>
          <div class="col">
            <h2
              class="font14 text-black font-custom font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              {{ formatPrice(selisih_penjualan) }} %
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (STATUS SUKSES >= 100%, GAGAL < 100%)
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row text-center rows-col-3"
      v-if="contentFor === 'monthToMonth'"
    >
      <div class="col bg-blue text-white py-2 font-custom">{{ title }}</div>
      <div class="table-bordered col-12">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              HISTORIKAL PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(historikal) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2
              class="font14  font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              Rp {{ formatPrice(selisih_penjualan) }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp {{ formatPrice(aktual) }}
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              RATIO PENCAPAIAN
            </h2>
          </div>
          <div class="col">
            <h2
              class="font14 text-black font-custom font-weight-bolder"
              v-bind:class="
                parseInt(selisih_penjualan) > 0 ? 'text-dark ' : 'text-danger '
              "
            >
              {{ formatPrice(selisih_penjualan) }} %
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (STATUS SUKSES >= 100%, GAGAL < 100%)
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
    "title",
    "historikal",
    "aktual",
    "selisih_penjualan",
    "target_penjualan"
  ],
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style scoped>
.bg-blue {
  background-color: #6a813d;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border-color: #6a813d !important;
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

.font14 {
  font-size: 14px;
}
</style>
