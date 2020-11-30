<template>
  <div class="col-md-12 col-12 p-0 mt-track">
    <div class="card mb-1 shadow1">
      <div class="row text-center no-gutters bg radius">
        <div class="col-md-6 col-6">
          <div class="card-body py-2">
            <h4 class="card-title font-weight-bold font16 mb-1 font-theme">
              Proses
            </h4>
            <p class="card-text font16 font-weight-light font-theme">
              {{detailTransaksi.tanggal_transaksi}}
            </p>
          </div>
        </div>
        <div class="col-md-6 col-6">
          <div class="card-body py-2">
            <h4 class="card-title font-weight-bold font16 mb-1 font-theme">
              Selesai
            </h4>
            <p class="card-text font16 font-weight-light font-theme">
              {{detailTransaksi.tanggal_terima}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailTransaksi"],
};
</script>

<style scoped>
.mt-track {
  margin-top: 5rem;
}
.bg {
  background-color: #e8e2ff;
}

.card {
  border: none !important ;
}

.shadow1 {
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.03));
}

.hw26 {
  height: 26px;
  width: 26px;
}

.radius {
  border-radius: 7px;
}
.font-theme {
  color: #4e37b2;
}
@media screen and (max-width: 1000px) {
  .mt-track {
    margin-top: 3.3rem;
  }

  .font14 {
    font-size: 14px;
  }
  .font16 {
    font-size: 16px;
  }
  .font12px {
    font-size: 12px;
  }
}
</style>
