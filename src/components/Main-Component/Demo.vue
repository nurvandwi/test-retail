<template>
  <div>
    <tabs>
      <tab title="Tersedia">
        <CardVoucherAvailable />
      </tab>
      <tab title="Terpakai">
        <CardVoucherUnavailable />
      </tab>
    </tabs>
  </div>
</template>

<script>
import CardVoucherAvailable from "../Catalog/CardVoucherAvailable.vue";
import CardVoucherUnavailable from "../Catalog/CardVoucherUnavailable.vue";
import Tab from "../Main-Component/Tab.vue";
import Tabs from "../Main-Component/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
    CardVoucherAvailable,
    CardVoucherUnavailable,
  },
};
</script>

<style>
</style>