<template>
  <div class="container ">
    <div class="row text-center">
      <div class="col-12 table-top col-md-12 bg-blue d-flex">
        <div
                class="font12 p-0 text-white text-left border-right col-sm-4 col-4 py-2"
        >
          TYPE REBATE
        </div>
        <div
                class="text-center p-0 font12 text-white border-right col-sm-4 col-4 py-2"
        >
          NILAI REBATE
        </div>
        <div class="font12 p-0 text-center text-white col-sm-4 col-4 py-2">
          TGL TRANSFER
        </div>
      </div>
      <div class="col-12 table-bordereds rounded-bottom ">
        <div class="row mt-2 border-bottom">
          <div class="col-4 col-md-4 py-0 px-0">
            <h2 class="font12 col-12 text-left text-gray  font-weight-bolder">
              Rebate Medio
            </h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font12 font-weight-bolder">1.018.046</h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font12 font-weight-bolder">17/08/2020</h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 ">
            <h2
                    class="font12 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Bulanan
            </h2>
          </div>
          <div class="col-4 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              1.018.046
            </h2>
          </div>
          <div class="col-4 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              17/08/2020
            </h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4 col-md-4 py-0 ">
            <h2 class="font12 text-black text-left font-weight-bolder">
              Total Rebate
            </h2>
          </div>
          <div class="col-4 col-md-4">
            <h2 class="font12 text-black font-weight-bolder">1.018.046</h2>
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
