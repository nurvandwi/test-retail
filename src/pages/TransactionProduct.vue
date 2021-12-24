<template>
  <div>
    <Header title="Semua Transaksi" />
    <Tabs class="mb-custom" />
  </div>
</template>

<script>
import Tabs from "../components/Catalog/Tabs";
import Header from "../components/Catalog/Header";
export default {
  components: {
    Header,
    Tabs
  }
};
</script>

<style>
.mb-custom {
  margin-bottom: 7rem;
}
</style>
