<template>
  <div class="container mb-3">
    <div class="row text-center rows-col-3">
      <div class="col font-custom bg-blue text-white py-2">{{ title }}</div>
      <div class="table-bordered col-12 rounded-bottom">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              PEROLEHAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              CARRY OVER
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              POIN TERSEDIA
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              PENUKARAN POIN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              SISA POIN
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder font-custom">
              260.885.65
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (CARRY OVER KE QUARTER BERIKUTNYA)
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.bg-blue {
  background-color: #6a813d;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.table-bordered {
  border-color: #6a813d !important;
  border-bottom-left-radius: 18px !important;
  border-bottom-right-radius: 18px !important;
}

.text-gray {
  color: #6c757d;
}

.text-blue {
  color: #7fceeb;
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
