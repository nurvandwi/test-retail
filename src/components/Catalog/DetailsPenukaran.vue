<template>
  <div class="container mt-custom mt-3">
    <div
      class="row text-left rows-col-3 "
      v-if="detailTransaksi.item == 'rebate'"
    >
      <div
        class="col bg-blue border-panel  font-weight-bold text-blue py-2 font-custom"
      >
        <h5 class=" font-theme font-custom font-weight-bold font16 my-2">
          Detail Penukaran Produk
        </h5>
      </div>
      <div
        class="table-bordered box-shadows col-12 mb-5 "
        style="background-color: white"
      >
        <div class="">
          <div class="shadow1 radius">
            <div class="row no-gutters bg border-bottom-dashed">
              <div class="col-md-2 col-2 align-self-center pl-2">
                <img :src="detailTransaksi.img" class=" w-img" />
              </div>
              <div class="col-md-10 col-10">
                <div class="card-body pl-3 pr-0 py-3">
                  <h5 class="card-title font14px font-weight-bold mb-0">
                    {{ detailTransaksi.nama_produk }}
                  </h5>
                  <p class="card-text font-weight-normal font16">
                    {{ detailTransaksi.nominal }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-left rows-col-3 " v-else>
      <div
        class="col bg-blue border-panel  font-weight-bold text-blue py-2 font-custom"
      >
        <h5 class="font10 font-theme font-custom font-weight-bold font16 my-2">
          Detail Penukaran Produk
        </h5>
      </div>
      <div
        class="table-bordered box-shadows col-12 mb-5 "
        style="background-color: white"
      >
        <div class="">
          <div class="shadow1 radius">
            <div class="row no-gutters bg border-bottom-dashed">
              <div class="col-md-2 col-2 align-self-center pl-2">
                <img :src="detailTransaksi.img" class=" w-img" />
              </div>
              <div class="col-md-10 col-10">
                <div class="card-body pl-3 pr-0">
                  <h5 class="card-title font14px font-weight-bold">
                    {{ detailTransaksi.nama_produk }}
                  </h5>
                  <div class="d-flex justify-content-between">
                    <p class="card-text  font8">
                      {{ detailTransaksi.quantity }} X
                      {{ detailTransaksi.poin }} Poin
                    </p>
                    <h5 class=" font18  text-right">{{ totalRedemp }} Poin</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailTransaksi"],
  computed: {
    totalRedemp() {
      return this.detailTransaksi.quantity * this.detailTransaksi.poin;
    }
  }
};
</script>

<style scoped>
.border-panel {
  border-top: 1.2px solid #dedede !important;
  border-bottom: 0px solid;
  border-left: 1.2px solid #dedede !important;
  border-right: 1.2px solid #dedede !important;
}

.bg-blue {
  background-color: #eee9ff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.box-shadows {
  box-shadow: 0px 4px 4px rgba(241, 237, 255, 0.3);
}

.mt-custom {
  margin-top: -2rem;
}

.border-bottom-dashed {
  border-bottom: 1px dashed white;
}

.table-bordered {
  border-top: 0px solid #dedede !important;
  border-left: 1.2px solid #dedede !important;
  border-right: 1.2px solid #dedede !important;
  border-bottom: 1.2px solid #dedede !important;
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
.w-img {
  width: 75%;
}

@media screen and (max-width: 1000px) {
  .w-img {
    width: 100%;
  }
  .w-85 {
    width: 85%;
  }

  .font10 {
    font-size: 10px;
  }

  .font12px {
    font-size: 12px !important;
  }

  .font14px {
    font-size: 14px !important;
  }

  .font16px {
    font-size: 16px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
