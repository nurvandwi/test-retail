<template>
  <div class="container mt-custom mt-3">
    <div class="row text-left rows-col-3">
      <div
        class="col bg-blue d-flex justify-content-between font-weight-bold text-blue py-2 font-custom"
      >
        <h5 class="font10 font-theme font-custom font-weight-bold font18 my-2">
          MVG-2020123456
        </h5>

        <div>
          <img height="15px" src="#" alt srcset />
        </div>
      </div>

      <div class="table-bordered col-12">
        <div class="row text-left mt-2">
          <div class="col font10">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Penerima
            </h5>
          </div>
          <div class="col">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Tanggal diterima
            </h5>
          </div>
        </div>
        <div class="row text-left mb-2">
          <div class="col font10">
            <h5 class="font16 text-black font-weight-bolder">Adam Jaya</h5>
          </div>
          <div class="col">
            <h5 class="font16 text-black font-weight-bolder">12/09/2020</h5>
          </div>
        </div>
        <div class="row text-left mt-2">
          <div class="col font10">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No. Telepon
            </h5>
          </div>
          <div class="col">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Provinsi
            </h5>
          </div>
        </div>
        <div class="row text-left mb-2">
          <div class="col font10">
            <h5 class="font16 text-black font-weight-bolder">0812344567890</h5>
          </div>
          <div class="col">
            <h5 class="font16 text-black font-weight-bolder">DKI Jakarta</h5>
          </div>
        </div>
        <div class="row text-left mt-2">
          <div class="col font10">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Alamat
            </h5>
          </div>
          <div class="col">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Kecamatan
            </h5>
          </div>
        </div>
        <div class="row text-left mb-2">
          <div class="col font10">
            <h5 class="font16 text-black font-weight-bolder">
              Jln. KH Agus Salim 16
            </h5>
          </div>
          <div class="col">
            <h5 class="font16 text-black font-weight-bolder">Cempaka Putih</h5>
          </div>
        </div>
        <div class="row text- mt-2">
          <div class="col-6 font10">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Kota/Kab
            </h5>
          </div>
        </div>
        <div class="row text-left mb-2">
          <div class="col font10">
            <h5 class="font16 text-black font-weight-bolder">
              Kota Administrasi Jakarta Pusat
            </h5>
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
.bg-blue {
  background-color: #f8f7ff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border-color: #f1edff !important;
  border-bottom-left-radius: 18px !important;
  border-bottom-right-radius: 18px !important;
}

.text-blue {
  color: #4e37b2;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}
.font-gray {
  color: #b6b6b6;
}

.font-theme {
  color: #4e37b2;
}
@media screen and (max-width: 1000px) {
  .font10 {
    font-size: 10px;
  }
  .font12px {
    font-size: 12px;
  }
  .font14 {
    font-size: 14px;
  }
  .font16 {
    font-size: 16px;
  }
  .font18 {
    font-size: 18px;
  }
}
</style>
