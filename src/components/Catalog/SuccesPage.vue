<template>
  <div>
    <div class="card">
      <img
        src="../../assets/Success.png"
        class="card-img-top align-self-center"
        data-aos="zoom-in"
        data-aos-easing="linear"
      />
      <div class="card-body text-center font-violet pt-5" data-aos="fade-down">
        <h4 class="card-text font18 font-weight-bold">Penukaran hadiah sukses</h4>
        <h4 class="card-text font18 font-weight-bold">Terima Kasih</h4>
      </div>
      <FooterProduct :contentFor="'Success'" />
    </div>
  </div>
</template>

<script>
import FooterProduct from "@/components/Catalog/FooterProduct.vue";
export default {
  components: {
    FooterProduct
  }
};
</script>

<style scoped>
.card {
  border: none !important;
}

.bg-violet {
  background-color: #4e37b2;
}

.font-violet {
  color: #4e37b2;
}

img {
  height: auto;
  max-width: 20vw;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  img {
    height: auto;
    max-width: 100vw;
    min-height: 100%;
  }
  .font18 {
    font-size: 18px;
  }
}
</style>
