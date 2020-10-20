<template>
  <div class="col-md-12 col-12 p-0">
    <div v-if="contentFor === 'OrderDetails'">
      <div
        class="card mt-2 mb-3 shadow1 radius"
        v-for="item in cart"
        :key="item.product.id"
      >
        <div class="row no-gutters bg">
          <div class="col-md-2 col-2 px-2 align-self-center color-card ">
            <img src="../../assets/xiaomi.png" class="w-100 m-auto d-flex" />
          </div>
          <div class="col-md-5 col-5 offset-2">
            <div class="card-body padding-card">
              <h4 class="card-title font-weight-bold font14">
                {{ item.product.nama_produk }}
              </h4>
              <h5 class="card-text font14px">
                {{ item.quantity }} x {{ item.product.poin }} poin
              </h5>
            </div>
          </div>
          <div class="col-md-3  col-3 align-self-center pl-5">
         <a  @click.prevent="removeProductFromCart(item.product)"><img src="../../assets/icon-delete.png" class=" size-delete" /></a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PulsaDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-2 col-2 px-2 align-self-center color-card ">
            <img src="../../assets/icon-dana.png" class="w-100 m-auto d-flex" />
          </div>
          <div class="col-md-5 col-5 offset-2">
            <div class="card-body padding-card">
              <h4 class="card-title font-weight-bold font14">
                Pulsa XL (10000)
              </h4>
              <h5 class="card-text font14px">1 x 200 poin</h5>
            </div>
          </div>
          <div class="col-md-3  col-3 align-self-center pl-5">
            <img src="../../assets/icon-delete.png" class=" size-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PointCashDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-2 col-2 px-2 align-self-center color-card ">
            <img src="../../assets/icon-dana.png" class="w-100 m-auto d-flex" />
          </div>
          <div class="col-md-5 col-5 offset-2">
            <div class="card-body padding-card">
              <h4 class="card-title font-weight-bold font14">Dana (10000)</h4>
              <h5 class="card-text font14px">1 x 200 poin</h5>
            </div>
          </div>
          <div class="col-md-3  col-3 align-self-center pl-5">
            <img src="../../assets/icon-delete.png" class=" size-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'RebateDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-2 col-2 px-2 align-self-center color-card ">
            <img
              src="../../assets/icon-rebate v-2.png"
              class="w-100 m-auto d-flex"
            />
          </div>
          <div class="col-md-5 col-5 offset-2">
            <div class="card-body padding-card">
              <h4 class="card-title font-weight-bold font14">
                Rebate (766,000)
              </h4>
              <h5 class="card-text font14px">January</h5>
            </div>
          </div>
          <div class="col-md-3  col-3 align-self-center pl-5">
            <img src="../../assets/icon-delete.png" class=" size-delete" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'EwalletDetails'">
      <div class="card mt-3 mb-3 shadow1 radius">
        <div class="row no-gutters bg">
          <div class="col-md-2 col-2 px-2 align-self-center color-card ">
            <img src="../../assets/icon-dana.png" class="w-100 m-auto d-flex" />
          </div>
          <div class="col-md-5 col-5 offset-2">
            <div class="card-body padding-card">
              <h4 class="card-title font-weight-bold font14">Dana (10000)</h4>
              <h5 class="card-text font14px">1 x 200 poin</h5>
            </div>
          </div>
          <div class="col-md-3  col-3 align-self-center pl-5">
            <img src="../../assets/icon-delete.png" class=" size-delete" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="contentFor === 'ListTransaksi'" class="col-12 col-md-12 mt-4">
      <div
        class="col-12 col-md-12 mx-0 mt-2 rounded-custom px-0 shadow-item"
        v-for="all in alltransaction"
        :key="all.id"
      >
        <div
          class="  text-left  d-flex flex-row align-items-center my-3 py-0  pl-3 pr-0"
        >
          <img class="imagecustom pr-3 " :src="all.img" alt />
          <div class="align-items-center col-md-8 col-8 pl-1">
            <h5 class="font12px caption4 p-0 font-weight-bold m-0 text-dark">
              {{ all.nama_produk }}
            </h5>
            <p class="text-dark card-text font11">
              {{ all.tanggal_transaksi }}0
            </p>
          </div>
          <div class="col-md-2 col-2 align-self-center pr-2">
            <p
              :class="{
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-warning float-right':
                  all.status === 'Proses',
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-success float-right':
                  all.status === 'Sukses',
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-otorisasi float-right':
                  all.status === 'Otorisasi'
              }"
            >
              {{ all.status }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contentFor", "alltransaction"],
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods:{
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  }
};
</script>

<style scoped>
.imagecustom {
  width: 15%;
}

.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
}
.rounded-custom {
  border-radius: 15px;
}
.br {
  border-radius: 15px;
}

.iconcustom {
  background-size: cover;
  height: 15px;
}
.color-card {
  background-color: #f1f5ff;
}
.shadow-item {
  /*box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;*/
  border: 0.7px solid #dedede;
}
.size-image {
  max-width: 50%;
}
.card {
  border: none !important ;
}

.bg-success {
  background-color: #40c351 !important;
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
  .imagecustom {
    width: 17%;
  }
  .size-delete {
    width: 40%;
  }

  .padding-card {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
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
  .font12px {
    font-size: 12px;
  }
  .font14px {
    font-size: 14px;
  }
  .font11 {
    font-size: 11px;
  }
  .font13 {
    font-size: 13px;
  }
}
</style>
