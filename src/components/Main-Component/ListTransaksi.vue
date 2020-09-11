<template>
  <div class=" mt-4 pt-1 ">
    <div
      class="col-12 align-self-center font14 bg-blue d-flex justify-content-between font-weight-bold"
    >
      <h3 class="font16 m-0 align-self-center font-weight-bold py-0 px-2">
        List Transaksi
      </h3>

      <p class="rounded-pill  m-0 font12 py-2 px-2 bg-purple">Lihat Semua</p>
    </div>
    <listItem :contentFor="'ListTransaksi'" />
  </div>
</template>
<script>
import listItem from "@/components/Catalog/ListItem.vue";
export default {
  components: {
    listItem
  }
};
</script>
<style scoped>
.bg-purple {
  background-color: #e3eeff;
  color: #4e37b2;
}

.font14 {
  font-size: 14px;
}
.font12 {
  font-size: 12px;
}
@media screen and (max-width: 1000px) {
  .font16 {
    font-size: 16px;
  }
}
</style>
