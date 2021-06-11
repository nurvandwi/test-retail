<template>
  <div class="container">
    <Header :title="'Voucher Cashback'" />
    <div class="mt-custom">
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
    <div class="card mt-3">
      <div class="row no-gutters">
        <div class="col-4">
          <div class="card-body p-0">
            <img
              width="65"
              src="../assets/COG-LOGO-Joss_Retail_salesman.png"
              alt="..."
            />
            <p class="mx-5" style="white-space: pre; font-size: 15px">
              Periode :<span>Desember 2021</span>
            </p>
          </div>
        </div>
        <div class="col-4 py-3 px-2 text-right">
          <img width="60" src="../assets/pz.png" alt="..." />
        </div>
        <div
          class="col-4 border-left"
          style="
            background: #d3d3d3;
            height: 10rem;
            border-top-right-radius: 11px;
            border-bottom-right-radius: 11px;
          "
        >
          <div class="pt-3 p-2">
            <h6 class="text-dark text-center m-0" style="font-size: 13px">
              Nomor Seri
            </h6>
            <p class="text-dark m-0" style="font-size: 8px">
              Untuk Penukaran Voucher
            </p>
          </div>
          <div class="py-3">
            <img
              width="75"
              class="text-center mx-3 bg-white p-2"
              src="https://img.icons8.com/metro/52/000000/qr-code.png"
            />
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
  border: 0.5px solid #808080 !important;
}
/deep/ .backtheme {
  background-color: #b30000;
}
</style>