<template>
  <div>
    <ListItem :contentFor="'OrderDetails'" />
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