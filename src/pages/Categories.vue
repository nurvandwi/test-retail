<template>
  <div class="container p-0">
    <Header :contentFor="'categories'" />
    <ListMenu />
  </div>
</template>

<script>
import Header from "../components/Main-Component/Header.vue";
import ListMenu from "../components/Main-Component/ListMenu.vue";
export default {
  components: {
    Header,
    ListMenu
  }
};
</script>

<style></style>
