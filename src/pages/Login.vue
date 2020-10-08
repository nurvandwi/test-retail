<template>
  <div class="container">
    <Header :contentFor="'Login'" />
    <Input class="mt-form"/>
  </div>
</template>

<script>
import Input from "@/components/Main-Component/Input.vue";
import Header from "@/components/Main-Component/Header.vue";

export default {
  components: {
    Header,
    Input
  }
};
</script>

<style>
  .mt-form{
    margin-top:6rem
  }
</style>
