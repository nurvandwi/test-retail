<template>
  <div class="container">
    <Quarter />
    <DetailPenjualan title="PENJUALAN PER QUARTER" class="mt-custom" />
    <Poin title="POIN PER QUARTER" class="mt-3" />
    <Tarif title class="mt-3" />
    <BulanTransaksi />
    <DetailPenjualan title="PENJUALAN PER BULAN" class="mt-3" />
    <DetailPenjualan title="DETAIL PENJUALAN MEDIO BULAN" class="mt-3" />
    <Poin title="POIN PER BULAN" class="mt-3" />
    <TotalRebate title class="mb-custom" />
  </div>
</template>

<script>
import Quarter from "@/components/Quarter/Quarter.vue";
import DetailPenjualan from "@/components/Quarter/DetailPenjualan.vue";
import Poin from "@/components/Quarter/Poin.vue";
import TotalRebate from "@/components/Quarter/TotalRebate.vue";
import BulanTransaksi from "@/components/Quarter/BulanTransaksi.vue";
import Tarif from "@/components/Quarter/Tarif.vue";
export default {
  components: {
    Quarter,
    DetailPenjualan,
    Poin,
    TotalRebate,
    BulanTransaksi,
    Tarif
  }
};
</script>

<style scoped>
.mb-custom {
  margin-bottom: 4rem;
}

.mt-custom {
  margin-top: 2rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mt-custom {
    margin-top: 41vh;
  }
}
</style>
