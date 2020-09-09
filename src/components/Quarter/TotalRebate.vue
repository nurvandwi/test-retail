<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-12 table-top col-md-12 bg-blue d-flex">
        <div class="font-custom font10 text-white border-right col-sm-4 col-4 py-2">TYPE REBATE</div>
        <div
          class="font-custom text-center font10 text-white border-right col-sm-4 col-4 py-2"
        >NILAI REBATE</div>
        <div class="font-custom font10 text-white col-sm-4 col-4 py-2">TGL REBATE</div>
      </div>

      <div class="col-12 table-bordereds rounded-bottom text-left">
        <div class="row mt-2 border-bottom">
          <div class="col-4">
            <h2
              class="font13 font-custom text-gray position-absolute font-weight-bolder"
            >Rebate Medio</h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font13 font-weight-bolder">1.018.046</h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font13 font-weight-bolder">17/08/2020</h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-5 col-md-4">
            <h2 class="font13 font-custom text-gray font-weight-bolder">Rebate Bulanan</h2>
          </div>
          <div class="col-4 text-center right28">
            <h2 class="font13 position-relative font-weight-bolder">1.018.046</h2>
          </div>
          <div class="col-3 right22">
            <h2 class="font13 position-relative font-weight-bolder">17/08/2020</h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4">
            <h2 class="font13 text-black font-weight-bolder">Total Rebate</h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font13 text-black font-weight-bolder">1.018.046</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rounded {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.bt {
  border-top-right-radius: 20px;
  border-top-left-radius: 23px;
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
  .right28 {
    right: 28px;
  }
  .right22 {
    right: 22px;
  }
}
</style>
