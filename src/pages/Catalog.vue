<template>
  <div class="container p-0">
    <app-header />
    <product-list />
  </div>
</template>

<script>
import ProductList from "../components/Catalog/ProductList.vue";
import AppHeader from "../components/Catalog/AppHeader.vue";
export default {
  name: "app",
  components: {
    ProductList,
    AppHeader
  }
};
</script>

<style></style>
