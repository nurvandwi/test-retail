<template>
  <div class="container">
    <Quarter />
    <DetailPenjualan title="Penjualan Per Quarter" class="mb-3 mt-custom" />
    <DetailPoin title="Poin Per Quarter" />
    <Tarif />
    <BulanTransaksi />
    <DetailPenjualan class="mb-5 mt-3" />
    <div class="mb-3">
      <DetailMedio />
    </div>
    <DetailPoin />
    <TotalRebate class="mb-custom" />
  </div>
</template>

<script>
import Tarif from "@/components/Quarter/Tarif.vue";
import Quarter from "@/components/Quarter/Quarter.vue";
import TotalRebate from "@/components/Quarter/TotalRebate.vue";
import DetailPoin from "@/components/Quarter/DetailPoin.vue";
import DetailMedio from "@/components/Quarter/DetailMedio.vue";
import DetailPenjualan from "@/components/Quarter/DetailPenjualan.vue";
import BulanTransaksi from "@/components/Quarter/BulanTransaksi.vue";
export default {
  components: {
    Quarter,
    BulanTransaksi,
    DetailPenjualan,
    DetailMedio,
    DetailPoin,
    TotalRebate,
    Tarif
  }
};
</script>

<style scoped>
.mb-custom {
  margin-bottom: 4rem;
}

.mt-custom{
  margin-top:20rem;
}
</style>
