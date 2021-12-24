<template>
  <div>
    <Header title="Semua Transaksi" />
    <Tabs />
    <dataPulsas />
  </div>
</template>

<script>
import Tabs from "../components/Catalog/Tabs";
import Header from "../components/Catalog/Header";
import dataPulsas from "@/components/Catalog/dataPulsas.vue";
export default {
  components: {
    Header,
    dataPulsas,
    Tabs
  }
};
</script>

<style></style>
