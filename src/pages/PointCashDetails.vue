<template>
  <div class="container">
    <Header title="Point To Cash" />
    <Cart :contentFor="'PointCashDetails'" class="pt-4" />
    <Item :contentFor="'PointCashDetails'" />
    <DetailPengiriman :contentFor="'PointCashDetails'" />
    <FooterProduct :contentFor="'PointCashDetails'" />
  </div>
</template>

<script>
import DetailPengiriman from "@/components/Catalog/DetailPengiriman.vue";
import Cart from "@/components/Catalog/AlertCart.vue";
import Header from "@/components/Catalog/Header.vue";
import Item from "@/components/Catalog/ListItem.vue";
import FooterProduct from "@/components/Catalog/FooterProduct.vue";

export default {
  components: {
    Header,
    DetailPengiriman,
    Cart,
    Item,
    FooterProduct
  }
};
</script>

<style scoped></style>
