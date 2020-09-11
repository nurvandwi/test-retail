<template>
  <div class="mx-0">
    <Header title="E-Wallet & Pulsa" />
    <CategoriesEwallet />
    <dataPulsa />
  </div>
</template>

<script>
import Header from "../components/Catalog/Header";
import CategoriesEwallet from "../components/Catalog/CategoriesEwallet";
import dataPulsa from "../components/Catalog/dataPulsa";
export default {
  components: {
    Header,
    CategoriesEwallet,
    dataPulsa
  }
};
</script>

<style scoped></style>
