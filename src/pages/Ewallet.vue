<template>
  <div class="mx-0">
    <Header title="E-Wallet & Pulsa" />
    <CategoriesEwallet />
    <dataEwallet />
  </div>
</template>

<script>
import Header from "../components/Catalog/Header";
import CategoriesEwallet from "../components/Catalog/CategoriesEwallet";
import dataEwallet from "../components/Catalog/dataEwallet";
export default {
  components: {
    Header,
    CategoriesEwallet,
    dataEwallet
  }
};
</script>

<style scoped></style>
