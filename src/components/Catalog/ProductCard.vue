<template>
  <div class="col-md-6 col-12">
    <div class="card mb-3 py-2">
      <div class="row">
        <div class="col-md-4 col-4">
          <img
            class="img-fluid"
            style="max-width:100%;height:100px;"
            :src="product.galleries[0].photo"
            alt="Card image cap"
          />
        </div>
        <div class="col-md-8 col-8">
          <p class="card-title mb-0 font16" style="font-weight:bolder">
            <router-link class="text-dark" v-bind:to="'/product/' + product.id">{{product.name}}</router-link>
          </p>
          <button class="btn btn-info center-block col-md-6 col-6 mt-3" @click="addToCart()">Tukar</button>
        </div>
      </div>
      <div class="card-body px-3 py-0" style="border-top: 2px #e8e8e8 solid;">
        <p class="card-text mb-0 mt-2 font14">
          <strong class="text-dark">{{product.price}} Poin</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
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

<style>
.img-size {
  width: 6rem !important;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0.5px solid #dadada !important;
  border-radius: 0.75em !important;
}
.font12 {
  font-size: 12px !important;
}
@media screen and (max-width: 1000px) {
  .font12 {
    font-size: 12px !important;
  }
  .font14 {
    font-size: 14px !important;
  }
  .font16 {
    font-size: 16px !important;
  }
}
</style>
