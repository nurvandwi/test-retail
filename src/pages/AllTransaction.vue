<template>
  <div class="container">
    <Header title="Semua Transaksi" />
    <Tabs />
  </div>
</template>

<script>
import Tabs from "@/components/Catalog/Tabs.vue";
import Header from "@/components/Catalog/Header.vue";
export default {
  components: {
    Header,
    Tabs
  }
};
</script>

<style>
</style>