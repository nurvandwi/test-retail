<template>
  <div class="col-md-12 col-12">
    <div v-if="contentFor === 'OrderDetails'">
      <div class="card mt-2 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center">
            <img src="../../assets/image-hp.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6">
            <div class="card-body">
              <h1 class="card-title font-weight-bold font14">Xiaomi Mi 8</h1>
              <p class="card-text font12">3 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center pl-4">
            <img src="../../assets/money.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6 py-4">
            <div class="card-body pading-custom">
              <h1 class="card-title font14 font-weight-bold">
                Simpati (10000)
              </h1>

              <p class="card-text font12">1 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
      <div class="card mt-4 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center">
            <img src="../../assets/image-hp.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6">
            <div class="card-body">
              <h1 class="card-title font-weight-bold font14">Xiaomi Mi 8</h1>
              <p class="card-text font12">3 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PulsaDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center pl-4">
            <img src="../../assets/xl.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6 py-4">
            <div class="card-body pading-custom">
              <h1 class="card-title font14 font-weight-bold">
                Pulsa XL (10000)
              </h1>

              <p class="card-text font12">1 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PointCashDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center pl-4">
            <img src="../../assets/money.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6 py-4">
            <div class="card-body pading-custom">
              <h1 class="card-title font14 font-weight-bold">
                Simpati (10000)
              </h1>

              <p class="card-text font12">1 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'RebateDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center pl-4">
            <img src="../../assets/icon-rebate v-2.png" class="hw26" />
          </div>
          <div class="col-md-6 col-6 py-4">
            <div class="card-body pading-custom">
              <h1 class="card-title font14">Rebate (766,000)</h1>
              <p class="card-text font-weight-bold font12">January</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'EwalletDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-4 col-4 align-self-center pl-4">
            <img src="../../assets/icon-dana.png" class="hw26" />
          </div>
          <div class="col-md-4 col-6 py-4">
            <div class="card-body pading-custom">
              <h1 class="card-title font14 font-weight-bold">Dana (10000)</h1>
              <p class="card-text font12">1 x 200 poin</p>
            </div>
          </div>
          <div class="col-md-4 col align-self-center pl-3">
            <img src="../../assets/icon-delete.png" class="icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'ListTransaksi'">
      <div class="card mb-2 shadow-sm radius border border-white rounded">
        <div class="row no-gutters  px-3">
          <div class="col-md-4 col-3 align-self-center ">
            <img src="../../assets/dana.png" class="size-image" />
          </div>
          <div class="col-md-6 col-7 align-self-center">
            <div class="card-body ">
              <h5 class="card-title font12 font-weight-bold">Dana (10000)</h5>
              <p class="card-text font11">22 Agustus 2020</p>
            </div>
          </div>
          <div class="col-md-2 col-2 align-self-center ">
            <p
              class="text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-otorisasi float-right"
            >
              Otorisasi
            </p>
          </div>
        </div>
      </div>
      <div class="card mb-2 shadow-sm radius border border-white rounded">
        <div class="row no-gutters  px-3">
          <div class="col-md-4 col-3 align-self-center ">
            <img src="../../assets/icon-rebate v-2.png" class="size-image" />
          </div>
          <div class="col-md-6 col-7 align-self-center">
            <div class="card-body ">
              <h5 class="card-title font12 font-weight-bold">Rebate (10000)</h5>
              <p class="card-text font11">22 Agustus 2020</p>
            </div>
          </div>
          <div class="col-md-2 col-2 align-self-center ">
            <p
              class="text-center font12 m-0 py-1 px-3 text-white rounded-pill badge bg-success float-right"
            >
              Sukses
            </p>
          </div>
        </div>
      </div>
      <div class="card mb-2 shadow-sm radius border border-white rounded">
        <div class="row no-gutters  px-3">
          <div class="col-md-4 col-3 align-self-center ">
            <img src="../../assets/money.png" class="size-image" />
          </div>
          <div class="col-md-6 col-7 align-self-center">
            <div class="card-body ">
              <h5 class="card-title font12 font-weight-bold">
                Poin 2 cash (10000)
              </h5>
              <p class="card-text font11">22 Agustus 2020</p>
            </div>
          </div>
          <div class="col-md-2 col-2  align-self-center ">
            <p
              class="text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-process float-right"
            >
              Proses
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contentFor"],
};
</script>

<style scoped>
.size-image {
  max-width: 50%;
}
.card {
  border: none !important ;
}

.bg-success {
  background-color: #49d233;
}

.bg-otorisasi {
  background-color: #4b93ff;
}

.bg-process {
  background-color: #ffc14b;
}

.mw {
  max-width: 540px;
}

.font12 {
  font-size: 12px;
}

.shadow1 {
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.03));
}

.bg {
  background-color: #ffffff;
}
.hw26 {
  width: 50%;
}
.icon-delete {
  width: 15%;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .size-image {
    max-width: 50%;
  }
  .icon-delete {
    width: 60%;
  }
  .hw26 {
    width: 65%;
  }
  .pading-custom {
    padding: 1px;
    padding-left: 20px;
  }
  .font14 {
    font-size: 14px;
  }
  .font12 {
    font-size: 12px;
  }
  .font11 {
    font-size: 11px;
  }
  .font13 {
    font-size: 13px;
  }
}
</style>
