<template>
  <div class="container">
    <div class="row text-center rows-col-3">
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
              123
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
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
            <h2 class="font14 text-danger font-weight-bolder">
              Rp -172.999.999.000
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-custom font-weight-bolder">
              159,20%
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
  props: ["title", "total_sales"]
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
