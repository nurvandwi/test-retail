<template>
  <div class="col-md-6 col-6 px-0">
    <div class="px-1" data-aos="fade-up" data-aos-duration="1200" v-if="contentFor === 'product'">
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <div class="border border-white border-card p-2 mx-3 rounded-box color-card">
          <img
            class="img-fluid px-3 heightpicTab"
            style="max-width:100%;"
            src="../../assets/xiaomi.png"
            alt="Card image cap"
          />
        </div>
        <div class="card-body pb-0">
          <p class="card-title m-0">MVG2020-001</p>
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            <router-link class="text-dark" v-bind:to="'/product/' + product.id">Xiaomi</router-link>
          </h5>
        </div>
        <div class="card-body d-flex justify-content-between align-items-center pb-0">
          <h5 class="card-title m-0 font16">22 Poin</h5>
          <button class="btn" @click="addToCart()">
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div class="px-1" data-aos="fade-up" data-aos-duration="1200" v-if="contentFor === 'ewallet'">
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <img
          class="img-fluid px-3"
          style="max-width:100%;"
          :src="ewallet.galleries[0].photo"
          alt="Card image cap"
        />
        <div class="card-body pb-0">
          <p class="card-title m-0">MVG2020-001</p>
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            <router-link class="text-dark" v-bind:to="'/product/' + ewallet.id">{{ewallet.name}}</router-link>
          </h5>
        </div>
        <div class="card-body d-flex justify-content-between align-items-center pb-0">
          <h5 class="card-title m-0 font16">{{ewallet.price}} Poin</h5>
          <button class="btn" @click="addToEwallet()">
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div class="px-1" data-aos="fade-up" data-aos-duration="1200" v-if="contentFor === 'PoinCash'">
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <img
          class="img-fluid px-3"
          style="max-width:100%;"
          :src="poincash.galleries[0].photo"
          alt="Card image cap"
        />
        <div class="card-body pb-0">
          <p class="card-title m-0">MVG2020-001</p>
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            <router-link class="text-dark" v-bind:to="'/product/' + poincash.id">{{poincash.name}}</router-link>
          </h5>
        </div>
        <div class="card-body d-flex justify-content-between align-items-center pb-0">
          <h5 class="card-title m-0 font16">{{poincash.price}} Poin</h5>
          <button class="btn" @click="addToPoinCash()">
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div class="px-1" data-aos="fade-up" data-aos-duration="1200" v-if="contentFor === 'Rebate'">
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <img
          class="img-fluid px-3"
          style="max-width:100%;"
          :src="rebate.galleries[0].photo"
          alt="Card image cap"
        />
        <div class="card-body pb-0">
          <p class="card-title m-0">MVG2020-001</p>
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            <router-link class="text-dark" v-bind:to="'/rebate/' + rebate.id">{{rebate.name}}</router-link>
          </h5>
        </div>
        <div class="card-body d-flex justify-content-between align-items-center pb-0">
          <button class="btn ml-auto py-0" @click="addToRebate()">
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemProduct",
  props: ["product", "ewallet", "poincash", "contentFor", "rebate"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
    },
    addToEwallet() {
      this.$store.dispatch("addEwalletToCart", {
        ewallet: this.ewallet,
        quantity: 1
      });
    },
    addToPoinCash() {
      this.$store.dispatch("addPoinCashToCart", {
        poincash: this.poincash,
        quantity: 1
      });
    },
    addToRebate() {
      this.$store.dispatch("addRebateToCart", {
        rebate: this.rebate,
        quantity: 1
      });
    }
  }
};
</script>

<style>
.color-card {
  background-color: #f1f5ff;
}
.rounded-box {
  border-radius: 18px;
}

.img-size {
  width: 6rem !important;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0.5px solid #eeeeee !important;
  border-radius: 12px !important;
}
.font12 {
  font-size: 12px !important;
}
.width-card {
  width: 18rem;
}
@media screen and (max-width: 1000px) {
  .width-card {
    width: auto;
  }
  .font12 {
    font-size: 12px !important;
  }
  .font14 {
    font-size: 14px !important;
  }
  .font16 {
    font-size: 16px !important;
  }
  .img-cart {
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .heightpicTab {
      height: 250px !important;
    }
  }
}
</style>
