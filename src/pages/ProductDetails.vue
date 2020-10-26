<template>
  <div class="container">
    <Header title="Product Detail" />
    <Cart :contentFor="'OrderDetails'" class="mb-3 pt-4" />
    <Item :contentFor="'OrderDetails'" />
    <DetailPengiriman :contentFor="'OrderDetails'" class="mb-5" />
    <FooterProduct v-for="cart in carts"  :key="cart.id" :contentFor="'ProductDetails'"   :product="cart" />
  </div>
</template>

<script>
import DetailPengiriman from "@/components/Catalog/DetailPengiriman.vue";
import Item from "@/components/Catalog/ListItem.vue";
import Cart from "@/components/Catalog/AlertCart.vue";
import Header from "@/components/Catalog/Header.vue";
import FooterProduct from "@/components/Catalog/FooterProduct.vue";
export default {
  components: {
    Header,
    Cart,
    Item,
    DetailPengiriman,
    FooterProduct
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    }
  },
  mounted() {
    this.$store.dispatch("getCartItems");
  }
};
</script>

<style scoped></style>
