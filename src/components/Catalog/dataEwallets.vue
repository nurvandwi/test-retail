<template>
  <div>
    <ListItem :contentFor="'EwalletDetails'" />
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

<style>
</style>
