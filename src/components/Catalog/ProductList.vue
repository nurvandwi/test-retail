<template>
  <div class="m-0 p-0">
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'product'"
    >
      <ItemProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
        :contentFor="'product'"
      />
    </div>
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'ewallet'"
    >
      <ItemProduct
        v-for="ewallet in ewallets"
        :key="ewallet.id"
        :ewallet="ewallet"
        :contentFor="'ewallet'"
      />
    </div>
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'PoinCash'"
    >
      <ItemProduct
        v-for="poincash in poincashs"
        :key="poincash.id"
        :poincash="poincash"
        :contentFor="'PoinCash'"
      />
    </div>
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'Rebate'"
    >
      <ItemProduct
        v-for="rebate in rebates"
        :key="rebate.id"
        :rebate="rebate"
        :contentFor="'Rebate'"
      />
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
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getEwallets");
    this.$store.dispatch("getPoinCashs");
    this.$store.dispatch("getRebates");
  }
};
</script>

<style >
.margin-wrapper {
  margin-bottom: 8rem !important;
}
.space-card {
  padding-top: 3.5rem;
}
@media screen and (max-width: 1000px) {
  .margin-wrapper {
    margin-bottom: 4rem !important;
  }
  .space-card {
    padding-top: 1.8rem;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .margin-wrapper {
      margin-bottom: 4rem !important;
    }
    .space-card {
      padding-top: 3rem;
    }
  }
}
</style>