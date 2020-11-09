<template>
  <div class="col-md-6 col-6 px-0">
    <div
      class="px-1 "
      data-aos="fade-up"
      data-aos-duration="1200"
      v-if="contentFor === 'product'"
    >
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <div
          class="border border-white border-card p-2 mx-3 rounded-box color-card"
        >
          <img
            class="img-fluid px-3 py-3 heightpicTab"
            style="max-width:100%;"
            :src="product.img"
            alt="Card image cap"
          />
        </div>
        <div class="card-body pb-0">
          <p class="card-title m-0 font14">{{ product.kd_produk }}</p>
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            {{ product.nama_produk }}
          </h5>
        </div>
        <div
          class="card-body d-flex justify-content-between align-items-center pb-0"
        >
          <h5 class="card-title m-0 font18 font-weight-bold">
            {{ product.poin }}
          </h5>
          <button class="btn" @click="addToCart(cartTotalPrice, points.Poin)">
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div
      class="px-1"
      data-aos="fade-up"
      data-aos-duration="1200"
      v-if="contentFor === 'ewallet'"
    >
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
            {{ ewallet.name }}
          </h5>
        </div>
        <div
          class="card-body d-flex justify-content-between align-items-center pb-0"
        >
          <h5 class="card-title m-0 font16">{{ ewallet.price }} Poin</h5>
          <button
            class="btn"
            @click="addToEwallet(cartTotalPrice, points.Poin)"
          >
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div
      class="px-1"
      data-aos="fade-up"
      data-aos-duration="1200"
      v-if="contentFor === 'PoinCash'"
    >
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <div
          class="border border-white border-card p-2 mx-3 rounded-box color-card"
        >
          <img
            class="img-fluid px-3 py-4 m-auto d-flex heightpicTab"
            style="max-width:100%;"
            :src="poincash.img"
            alt="Card image cap"
          />
        </div>
        <div class="card-body pb-0">
          <p class="card-title m-0 font12px">{{ poincash.kd_produk }}</p>
          <h5 class="card-title mb-0 font12px" style="font-weight:bolder">
            {{ poincash.nama_produk }}
          </h5>
        </div>
        <div
          class="card-body d-flex justify-content-between align-items-center pb-0"
        >
          <h5 class="card-title m-0 font16 font-weight-bold">
            {{ poincash.poin }} Poin
          </h5>
          <button
            class="btn"
            @click="addToPoinCash(cartPoincashPrice, points.Poin)"
          >
            <img src="../../assets/icon-add.png" class="img-cart" alt />
          </button>
        </div>
      </div>
    </div>

    <div
      class="px-1"
      data-aos="fade-up"
      data-aos-duration="1200"
      v-if="contentFor === 'Rebate'"
    >
      <div class="card mx-auto mb-2 mt-0 py-3 width-card">
        <div
          class="border border-white border-card p-2 mx-3 rounded-box color-card"
        >
          <img
            class="img-fluid px-3 py-3 m-auto d-flex heightpicTab w-rebate"
            style="max-width:100%;"
            :src="rebate.img"
            alt="Card image cap"
          />
        </div>
        <div class="card-body pb-0">
          <h5 class="card-title mb-0 font16" style="font-weight:bolder">
            {{ rebate.periode }}
          </h5>
        </div>
        <div
          class="card-body d-flex justify-content-between align-items-center pb-0"
        >
          <h5 class="card-title m-0 font16">Rp. {{ rebate.rebate_text }}</h5>
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
    addToCart(cartTotalPrice, poin) {
      console.log(poin);
      if (poin >= this.product.poin || poin >= cartTotalPrice) {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
          pointItem: this.product.poin,
          cartTotalPrice
        });
      } else {
        alert("Poin anda Tidak cukup");
      }
    },
    addToEwallet(cartTotalPrice, poin) {
      console.log(poin);
      if (poin >= this.product.poin || poin >= cartTotalPrice) {
        this.$store.dispatch("addEwalletToCart", {
          ewallet: this.ewallet,
          quantity: 1,
          pointItem: this.product.poin,
          cartTotalPrice
        });
      }
    },
    addToPoinCash(cartPoincashPrice, poin) {
      console.log(poin);
      if (poin >= this.poincash.poin || poin >= cartPoincashPrice) {
        this.$store.dispatch("addPoinCashToCart", {
          poincash: this.poincash,
          quantity: 1,
          pointItem: this.poincash.poin,
          cartPoincashPrice
        });
      } else {
        alert("Poin anda Tidak cukup");
      }
    },
    addToRebate() {
      this.$store.dispatch("addRebateToCart", {
        rebate: this.rebate,
        quantity: 1
      });
    }
  },
  computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartPoincashPrice() {
      return this.$store.getters.cartPoincashPrice;
    },
    points() {
      return this.$store.state.points;
    }
  },
  mounted() {
    this.$store.dispatch("getPoin", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
  }
};
</script>

<style>
.w-rebate {
  width: 50%;
}

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
  border: 0.5px solid #dddddd !important;
  border-radius: 12px !important;
}

.font12 {
  font-size: 12px !important;
}

.width-card {
  width: 18rem;
}

@media screen and (max-width: 1000px) {
  .w-rebate {
    width: 75%;
  }

  .width-card {
    width: auto;
  }

  .font12px {
    font-size: 12px !important;
  }

  .font14 {
    font-size: 14px !important;
  }

  .font16 {
    font-size: 16px !important;
  }

  .font18 {
    font-size: 18px !important;
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
