<template>
  <div>
    <Header :title="'Voucher Cashback'" />
    <Demo class="mt-custom" />
  </div>
</template>

<script>
import Demo from "../components/Main-Component/Demo.vue";
import Header from "../components/Catalog/Header.vue";
export default {
  components: { Header, Demo },
};
</script>

<style scoped>
.mt-custom {
  margin-top: 5rem;
}

.card {
  border: 1px solid #808080 !important;
}
/deep/ .backtheme {
  background-color: #b30000;
}
</style>