<template>
  <div>
    <Header title="Point to Cash" />
    <ProductList :contentFor="'PoinCash'" />
    <FooterProduct :contentFor="'PoinCash'" />
  </div>
</template>

<script>
import Header from "../components/Catalog/Header";
import ProductList from "../components/Catalog/ProductList.vue";
import FooterProduct from "../components/Catalog/FooterProduct";
export default {
  components: {
    Header,
    ProductList,
    FooterProduct
  }
};
</script>

<style scoped></style>
