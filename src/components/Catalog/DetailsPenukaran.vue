<template>
  <div class="container mt-custom mt-3">
    <div class="row text-left rows-col-3" style="background-color: white">
      <div class="col bg-blue font-weight-bold text-blue py-2 font-custom">
        <h5 class="font10 font-theme font-custom font-weight-bold font18 my-2">
          Detail Penukaran Produk
        </h5>
      </div>
      <div class="table-bordered box-shadows col-12 mb-5">
        <div class="">
          <div class="shadow1 radius">
            <div class="row no-gutters bg border-bottom-dashed">
              <div class="col-md-3 col-2 align-self-center pl-2">
                <img :src="detailTransaksi.img" class=" w-85" />
              </div>
              <div class="col-md-6 col-8">
                <div class="card-body">
                  <h5 class="card-title font14px font-weight-bold">{{detailTransaksi.nama_produk}}</h5>
                  <p class="card-text font-weight-bold font14px">{{detailTransaksi.quantity}}</p>
                </div>
              </div>
              <div class="col-md-3 col-2 align-self-center pl-3">
                <h5 class="font-weight-bold font18  text-right">600</h5>
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
};
</script>

<style scoped>
.bg-blue {
  background-color: #EEE9FF;
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
  border-bottom: 1px dashed #e8e2ff;
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
  .w-85{
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
