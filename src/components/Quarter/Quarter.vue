<template>
  <div class="container jumbotron jumbotron-fluid pt-0 m-0">
    <section class="section-stats row justify-content-center">
      <div class="col-12 col-md-12 stats-details py-2 my-4">
        <p
          class="font22 text-top text-white font-custom font-weight-bolder text-center mb-0"
        >MONDELEZ VAGANZA</p>

        <h2 class="font14 text-white font-custom text-center">100000-ANI013 - BINTANG MAHKOTA</h2>
      </div>
      <div class>
        <div class="row pt-2 btn-quarter p-0">
          <div class="col-3 col-md-3 stats-details">
            <button type="button" class="btn font22 font-weight-bold rounded-circle btn-light">Q1</button>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <button type="button" class="btn font22 font-weight-bold rounded-circle btn-light">Q2</button>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <button type="button" class="btn font22 rounded-circle font-weight-bold btn-light">Q3</button>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <button type="button" class="btn font22 rounded-circle font-weight-bold btn-light">Q4</button>
          </div>
        </div>
        <div class="pb-1 pt-4">
          <h1 class="text-white text-center text-left m-0 font14">Pilih Quarter Pilihan Anda</h1>
        </div>
      </div>
    </section>
    <section>
      <!-- <div class="col-md-12 text-center mb-3 btn-month">
        <div class="row table-bordered bg-violet round h-53">
          <div class="col py-1 col-md-6 stats-details border-right">
            <div>
              <h2 class="font11 m-0 text-white font-custom font-weight-bold pt-1">SISA POIN</h2>
              <p class="text-blue font16 font-weight-bold m-0">8.796.000</p>
            </div>
          </div>
          <div class="col-6 py-1 col-md-6 m-0 p-0 stats-details">
            <div>
              <h2 class="font11 m-0 font-custom text-white pt-1 font-weight-bold">SALDO REBATE</h2>
              <p class="font-weight-bold font16 text-blue m-0">8.796.000.000</p>
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "BoxQuarter",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.h-53 {
  height: 53px;
}

.jumbotron {
  background-color: #ffffff !important;
  padding: 0px;
}

.pb-custom {
  padding-bottom: 40px;
}

hr {
  top: 8px;
  width: 0;
  height: 30px;
  position: relative;
  color: #d3d3d3;
  border: 1px solid;
}

.bt {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.round {
  border-radius: 20px;
}

.table-bordered {
  border: 1px solid #53448b;
}

.btn-outline-warning {
  border-color: #d3d3d3;
}
.font14 {
  font-size: 14px;
}

.text-blue {
  color: #ffcc00;
}

.font16 {
  font-size: 16px;
}

.font11 {
  font-size: 11px;
}
.font22 {
  font-size: 22px;
}

.font9 {
  font-size: 9px;
}

.font-weight-500 {
  font-weight: 500;
}

.text-top {
  margin-top: -10px;
}

.bg-violet {
  background: #ff4814;
}

.section-stats {
  min-height: 35vh;
  background-color: #41009a;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  max-width: auto;
  z-index: 1030 !important;
}
.btn-month {
  margin-top: -30px;
}

.btn-quarter {
  margin-top: -70px;
}

.rounded-right {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.btn-light:hover {
  background-color: #ffcc00;
}
</style>
