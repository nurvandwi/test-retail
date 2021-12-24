<template>
  <div>
    <ListItem :contentFor="'RebateDetails'" />
  </div>
</template>

<script>
import ListItem from "@/components/Catalog/ListItem.vue";
export default {
  components: {
    ListItem
  }
};
</script>

<style></style>
