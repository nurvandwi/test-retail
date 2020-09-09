<template>
  <div class="container">
    <Header title="Detail Penukaran" class="pt-3" />
    <TrackRecord />
    <DataPengiriman />
    <DetailsPenukaran class="mb-5" />
  </div>
</template>

<script>
import DataPengiriman from "@/components/Catalog/DataPengiriman.vue";
import DetailsPenukaran from "@/components/Catalog/DetailsPenukaran.vue";
import TrackRecord from "@/components/Catalog/TrackRecord.vue";
import Header from "@/components/Catalog/Header.vue";

export default {
  components: {
    Header,
    TrackRecord,
    DetailsPenukaran,
    DataPengiriman
  }
};
</script>

<style scoped></style>
