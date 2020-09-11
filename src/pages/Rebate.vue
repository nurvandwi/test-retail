<template>
  <div>
    <Header title="Rebate" />
    <ProductList :contentFor="'Rebate'" />
    <FooterProduct :contentFor="'Rebate'" />
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
