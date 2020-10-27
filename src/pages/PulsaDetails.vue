<template>
  <div class="container">
    <Header title="Pulsa Details" />
    <div>
      <Cart :contentFor="'PulsaDetails'" />
    </div>
    <Item :contentFor="'PulsaDetails'" />
    <DetailPengiriman :contentFor="'PulsaDetails'" />
    <FooterProduct :contentFor="'PulsaDetails'" />
  </div>
</template>

<script>
import FooterProduct from "@/components/Catalog/FooterProduct.vue";
import DetailPengiriman from "@/components/Catalog/DetailPengiriman.vue";
import Item from "@/components/Catalog/ListItem.vue";
import Cart from "@/components/Catalog/AlertCart.vue";
import Header from "@/components/Catalog/Header.vue";
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

<style scoped>

</style>
