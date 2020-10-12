<template>
  <div>
    <Header :contentFor="'home'" />
    <PromoBanner />
    <ListPromosi />

    <ListTransaksi class="mb-5 pb-5" />
  </div>
</template>

<script>
import Header from "../components/Main-Component/Header.vue";
import PromoBanner from "../components/Main-Component/PromoBanner.vue";
import ListTransaksi from "../components/Main-Component/ListTransaksi";
import ListPromosi from "../components/Main-Component/ListPromosi.vue";
export default {
  components: {
    Header,
    PromoBanner,
    ListPromosi,
    ListTransaksi
  }
};
</script>

<style>
</style>