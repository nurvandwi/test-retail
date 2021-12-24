<template>
  <div>
    <Header title="Semua Transaksi" />
    <Tabs />
    <dataRebate />
  </div>
</template>

<script>
import Tabs from "../components/Catalog/Tabs";
import Header from "../components/Catalog/Header";
import dataRebate from "@/components/Catalog/dataRebate.vue";
export default {
  components: {
    Header,
    dataRebate,
    Tabs
  }
};
</script>

<style></style>
