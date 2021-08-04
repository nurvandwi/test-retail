<template>
  <div>
    <tabs>
      <tab title="Tersedia">
        <CardVoucherAvailable
          :color="'linear-gradient(to right top, #e7104b, #ec2a5f, #ef3c72, #f14d84, #f15c95)'"
        />
      </tab>
      <tab title="Terpakai">
        <CardVoucherUnavailable
          :color="'linear-gradient(to right top, #e7104b, #ec2a5f, #ef3c72, #f14d84, #f15c95)'"
        />
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

<style scoped>
</style>