<template>
  <div>
    <Header title="Semua Transaksi" />
    <Tabs />
    <dataEwallets />
  </div>
</template>

<script>
import Tabs from "../components/Catalog/Tabs";
import Header from "../components/Catalog/Header";
import dataEwallets from "@/components/Catalog/dataEwallets.vue";
export default {
  components: {
    Header,
    dataEwallets,
    Tabs
  }
};
</script>

<style></style>
