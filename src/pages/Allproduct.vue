<template>
  <div class="container p-0">
    <app-header />
    <div class="row mt-5" v-if="product">
      <div class="col-12 col-md-4">
        <img :src="product.galleries[0].photo" class="w-100 h-100" alt />
      </div>
      <div class="col-12 col-md-8">
        <h1>{{ product.name }}</h1>
        <h3>{{ product.price }}</h3>
        <input type="number" class="text-center col-3 mr-2 p-1" />
        <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
        <p class="mt-3" v-html="product.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/Catalog/AppHeader.vue";
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  components: {
    AppHeader
  },
  mounted() {
    this.$store.dispatch("getProduct", { id: this.id });
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
    }
  }
};
</script>

<style scoped>
.lineBorder {
  border: 0.1px solid #dedede;
}
</style>