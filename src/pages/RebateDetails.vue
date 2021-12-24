<template>
  <div class="container">
    <Header title="Rebate" />
    <Cart :contentFor="'RebateDetails'" />
    <Item :contentFor="'RebateDetails'" />
    <DetailPengiriman :contentFor="'RebateDetails'" />
    <FooterProduct
      v-for="rebate in cartRebates"
      :key="rebate.id"
      :contentFor="'RebateDetails'"
      :rebate="rebate"
    />
  </div>
</template>

<script>
import DetailPengiriman from "@/components/Catalog/DetailPengiriman.vue";
import Item from "@/components/Catalog/ListItem.vue";
import Cart from "@/components/Catalog/AlertCart.vue";
import Header from "@/components/Catalog/Header.vue";
import FooterProduct from "@/components/Catalog/FooterProduct.vue";
export default {
  components: {
    Header,
    Item,
    DetailPengiriman,
    Cart,
    FooterProduct
  },
  computed: {
    cartRebates() {
      return this.$store.state.cartRebate;
    }
  },
  mounted() {
    this.$store.dispatch("getRebateItems");
  }
};
</script>

<style scoped></style>
