<template>
  <div>
    <Header title="Product" />
    <ProductList :contentFor="'product'" />
    <FooterProduct :contentFor="'product'" />
  </div>
</template>

<script>
import Header from '../components/Catalog/Header'
import ProductList from '../components/Catalog/ProductList.vue'
import FooterProduct from '../components/Catalog/FooterProduct'
export default {
  components: {
    Header,
    ProductList,
    FooterProduct
  }
}
</script>

<style scoped></style>
