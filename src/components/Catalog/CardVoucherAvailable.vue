<template>
  <div class="container mt-3">
    <div
      class="card shadow-lg mx-auto max-width bg_custom"
      :style="backgroundColor"
    >
      <div class="container">
        <div class="row text-white">
          <div class="col-8 p-3">
            <h6 class="m-0">Voucher Cashback</h6>
            <p class="font-weight-bold m-0" style="font-size: 33px">
              Rp. 100.000
            </p>
          </div>
          <div class="col-4 pt-3 pl-4">
            <img height="30" src="../../assets/pz.png" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-8">
          <div
            class="font-weight-thin float-right text-white"
            style="font-size: 13px"
          >
            ALS10A07 - ADIJAYA MAKMUR SANJAYA PERKOSA
          </div>
          <div
            class="font-weight-bold float-left text-white py-2"
            style="font-size: 12px"
          >
            Periode: <span class="font-weight-bold"> Desember 2021</span>
          </div>
        </div>
        <div class="col-4 mb-4 pl-4">
          <div class="text-center">
            <expandable-image
              width="55"
              src="https://img.icons8.com/metro/26/000000/qr-code.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    backgroundColor() {
      return `background-image: ${this.color}`;
    },
  },
};
</script>

<style scoped>
.max-width {
  max-width: 342px;
}

.expandable-image.expanded /deep/ {
  background: white !important;
}

.expandable-image /deep/ img {
  width: 75% !important;
}

.expandable-image.expanded /deep/ img {
  width: 50% !important;
}
</style>