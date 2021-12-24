<template>
  <div class="container">
    <Header title="E-wallet Details" />
    <div>
      <Cart :contentFor="'EwalletDetails'" />
    </div>
    <Item :contentFor="'EwalletDetails'" />
    <DetailPengiriman :contentFor="'EwalletDetails'" />
    <FooterProduct :contentFor="'EwalletDetails'" />
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
    Cart,
    Item,
    DetailPengiriman,
    FooterProduct
  }
};
</script>

<style scoped></style>
