<template>
  <div class="container">
    <section
      class="section-stats row justify-content-center mt-3 rounded-right rounded-left"
    >
      <div class="col-12 col-md-12 pt-2 stats-details">
        <h2 class="text-white font22 font-custom m-0">Bulan Transaksi</h2>
        <p class="font8 pb-0 m-0 text-white font-custom font-weight-bolder">
          Pilih Bulan Transaksi untuk melihat Detail Penjualan, Poin, dan Rebate
        </p>
      </div>
      <div class="content m-0">
        <table class="table px-0 mb-1">
          <thead>
            <tr>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">JANUARI</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">FEBRUARI</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">MARET</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">APRIL</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">MEI</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">JUNI</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">JULY</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">AGUSTUS</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">SEPTEMBER</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">OKTOBER</h3>
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">NOVEMBER</h3>
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BoxQuarter",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  /* This is the magic bit for Firefox */
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 97%;
}

.content::-webkit-scrollbar {
  /* This is the magic bit for WebKit */
  display: none;
}

.btn-outline-warning {
  border-color: #d3d3d3;
}
.font11 {
  font-size: 11px;
}

.table th {
  border: none !important;
}

.font9 {
  font-size: 9px;
}

.font8 {
  font-size: 8px;
}

.font22 {
  font-size: 22px;
}

.font-weight-500 {
  font-weight: 500;
}

.text-top {
  margin-top: -10px;
}

.section-stats {
  background-color: #41009a;
}
.btn-month {
  margin-top: -18px;
}

.rounded-right {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
}

.btn-light:hover {
  background-color: #ffcc00;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
