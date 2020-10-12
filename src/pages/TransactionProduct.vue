<template>
  <div>
    <Header title="Semua Transaksi" />
    <Tabs />
    <dataProduct />
  </div>
</template>

<script>
import Tabs from "../components/Catalog/Tabs";
import Header from "../components/Catalog/Header";
import dataProduct from "@/components/Catalog/dataProduct.vue";
export default {
  components: {
    Header,
    dataProduct,
    Tabs
  }
};
</script>

<style>
</style>