<template>
  <div class="container">
    <Header :title="'Voucher Cashback'" />
    <div class="mt-custom mb-3">
      <div class="row">
        <div class="col-6 text-center">
          <button
            type="button"
            class="btn btn-outline-danger rounded-pill text-danger w-75"
          >
            Tersedia
          </button>
        </div>
        <div class="col-6 text-center">
          <button
            type="button"
            class="btn btn-outline-danger rounded-pill text-danger w-75"
          >
            Terpakai
          </button>
        </div>
      </div>
    </div>
    <div class="card" style="max-width: 330px">
      <div
        class="row no-gutters"
        style="
          background: whitesmoke;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        "
      >
        <div class="col-4">
          <div class="card-body p-0">
            <img
              height="50"
              src="../assets/COG-LOGO-Joss_Retail_salesman.png"
            />

            <p
              class="card-text mx-3 mt-3 text-muted"
              style="border: 1px solid; border-radius: 20px; padding: 7px"
            >
              ALS10A07 - ADIJAYA MAKMUR
            </p>
            <p
              style="white-space: pre; font-size: 13px"
              class="card-text text-center mx-5 mb-0"
            >
              VOUCHER CASHBACK
            </p>
            <p class="card-text mx-3">
              <small
                class="font-weight-bold"
                style="white-space: pre; font-size: 35px"
                >Rp. 100.000</small
              >
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="card-body text-center p-0">
            <img class="py-2" height="50" src="../assets/pz.png" />
          </div>
        </div>
        <div
          class="col-4 border-left"
          style="
            background: rgb(156 156 156);
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          "
        >
          <div class="card-body p-0 text-white text-center my-5">
            <p class="card-text m-0 font-weight-bold" style="font-size: 13px">
              Scan QRcode
            </p>
            <p class="card-text" style="font-size: 10px">
              Untuk Penukaran Poin
            </p>
            <div class="card-text">
              <img
                class="p-2"
                style="background: #fff"
                height="70"
                src="https://img.icons8.com/metro/26/000000/qr-code.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 mb-5" style="max-width: 330px">
      <div
        class="row no-gutters"
        style="
          background: whitesmoke;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        "
      >
        <div class="col-4">
          <div class="card-body p-0">
            <img
              height="50"
              src="../assets/COG-LOGO-Joss_Retail_salesman.png"
            />
            <p
              class="card-text m-0 mx-5 mb-3"
              style="text-align: center; font-size: 13px; white-space: pre"
            >
              Periode : Desemeber 2021
            </p>
            <p class="card-text mx-3">
              <small
                class="text-muted"
                style="
                  white-space: pre;
                  border: 1px solid;
                  border-radius: 20px;
                  padding: 7px;
                "
                >ALS10A07 - ADIJAYA MAKMUR
              </small>
            </p>
            <p
              style="white-space: pre; font-size: 13px"
              class="card-text text-center mx-5 mb-0"
            >
              VOUCHER CASHBACK
            </p>
            <p class="card-text mx-3">
              <small
                class="font-weight-bold"
                style="white-space: pre; font-size: 35px"
                >Rp. 100.000</small
              >
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="card-body text-center p-0">
            <img class="py-2" height="50" src="../assets/pz.png" />
          </div>
        </div>
        <div
          class="col-4 border-left"
          style="
            background: rgb(156 156 156);
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          "
        >
          <div class="card-body p-0 text-white text-center my-5">
            <p class="card-text m-0 font-weight-bold" style="font-size: 13px">
              Scan QRcode
            </p>
            <p class="card-text" style="font-size: 10px">
              Untuk Penukaran Poin
            </p>
            <div class="p-2">
              <div class="bg-white p-2">
                <p class="card-text m-0 text-dark" style="font-size: 12px">
                  Kode Voucher
                </p>
                <p
                  class="card-text font-weight-bold text-dark"
                  style="font-size: 10px"
                >
                  ABCD1234EFGH
                </p>
                <p class="card-text m-0 text-dark" style="font-size: 9px">
                  Tanggal Penukaran
                </p>
                <p
                  class="card-text font-weight-bold text-dark"
                  style="font-size: 8px"
                >
                  25 Desember 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Catalog/Header.vue";
export default {
  components: { Header },
};
</script>

<style scoped>
.mt-custom {
  margin-top: 5rem;
}
.card {
  border: 1px solid #808080 !important;
}
/deep/ .backtheme {
  background-color: #b30000;
}
</style>