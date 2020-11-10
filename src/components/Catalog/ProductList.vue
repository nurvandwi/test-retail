<template>
  <div class="m-0 p-0">
    <div class="" v-if="contentFor === 'product'" style="margin-bottom: 6.5rem">
      <h4 class="font18 margin-wrapper px-2  space-card mb-1 font-weight-bold">
        Produk Reward
      </h4>
      <p class="px-2 mb-3 font14">Pilih Produk Dibawah ini</p>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
          :contentFor="'product'"
        />
      </div>
    </div>
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'ewallet'"
      style="margin-bottom: 6.5rem"
    >
      <ItemProduct
        v-for="ewallet in ewallets"
        :key="ewallet.id"
        :ewallet="ewallet"
        :contentFor="'ewallet'"
      />
    </div>
    <div
      class=""
      v-if="contentFor === 'PoinCash'"
      style="margin-bottom: 6.5rem"
    >
      <h4 class="font18 margin-wrapper px-2  space-card mb-1 font-weight-bold">
        Poin Cash
      </h4>
      <p class="px-2 mb-3 font14">Pilih nominal poin2cash dibawah ini.</p>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="Itempoincash in poincashs"
          :key="Itempoincash.id"
          :poincash="Itempoincash"
          :contentFor="'PoinCash'"
        />
      </div>
    </div>
    <div v-if="contentFor === 'Rebate'" style="margin-bottom: 6.5rem">
      <h4 class="font18 margin-wrapper px-2  space-card mb-1 font-weight-bold">
        Rebate Reward
      </h4>
      <p class="px-2 mb-3 font14">Pilih bulan atau quarter rebate dibawah ini.</p>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="rebate in rebates"
          :key="rebate.id"
          :rebate="rebate"
          :contentFor="'Rebate'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemProduct from "./ItemProduct.vue";

export default {
  props: ["contentFor"],
  components: {
    ItemProduct
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    ewallets() {
      return this.$store.state.ewallets;
    },
    poincashs() {
      return this.$store.state.poincashs;
    },
    rebates() {
      return this.$store.state.rebates;
    },
    points() {
      return this.$store.state.points;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
    this.$store.dispatch("getEwallets");
    this.$store.dispatch("getPoinCashs", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
    this.$store.dispatch("getPoin", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
    this.$store.dispatch("getRebates", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
  }
};
</script>

<style scoped>
.margin-wrapper {
  margin-bottom: 8rem !important;
}

.space-card {
  padding-top: 3.5rem;
}

@media screen and (max-width: 1000px) {
  .margin-wrapper {
    margin-bottom: 0rem !important;
  }

  .space-card {
    padding-top: 1.5rem;
  }

  .font18 {
    font-size: 18px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .margin-wrapper {
    margin-bottom: 0rem !important;
  }

  .space-card {
    padding-top: 3rem;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
