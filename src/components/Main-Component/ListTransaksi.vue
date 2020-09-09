<template>
  <div class="mb-5 pb-3">
    <div class="col-12 font14 bg-blue d-flex justify-content-between font-weight-bold">
      <h1 class="font16 pt-2 font-weight-bold pl-2">List Transaksi</h1>
      <div>
        <p class="rounded-pill font12 py-2 px-2 bg-purple">Lihat Semua</p>
      </div>
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
.imagecustom {
  background-size: cover;
  height: 46px;
}

.shadow1 {
  filter: drop-shadow(0px 10px 10px rgba(240, 248, 255, 0.1));
}

.br {
  border: 1px #d3d3d3 solid;
  border-radius: 15px;
}

.iconcustom {
  background-size: cover;
  height: 15px;
}

.bg-purple {
  background-color: #e3eeff;
  color: #4e37b2;
}

.font16 {
  font-size: 16px;
}

.font14 {
  font-size: 14px;
}
.font12 {
  font-size: 12px;
}
</style>
