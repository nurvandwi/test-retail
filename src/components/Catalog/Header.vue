<template>
  <div class="mb-custom">
    <router-link v-bind:to="'/home/' + `${$route.params.outlet_id}`">
      <nav
        class="
          navbar
          m-auto
          navbar-Container navbar-light
          backtheme
          py-3
          d-flex
          justify-content-center
          footerstyle
        "
      >
        <div class="col-md-3 col-2 pl-0 pr-0">
          <img class="img-back" src="../../assets/icon-back.png" alt />
        </div>
        <div class="col-md-7 col-8 mr-auto">
          <h1 class="font20 fontipad mb-0 text-white text-center">
            {{ title }}
          </h1>
        </div>
      </nav>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>

<style scoped>
.backtheme {
  background: #4e37b2;
}

.footerstyle {
  position: fixed !important;
  top: 0 !important;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1030 !important;
}

.navbar-Container {
  max-width: 750px;
}

.img-back {
  width: 12% !important;
}

.mb-custom {
  margin-bottom: 3rem !important;
}
/*.mb-custom {
  margin-bottom: 6rem !important;
}*/
@media screen and (max-width: 1000px) {
  .mb-custom {
    margin-bottom: 3rem !important;
  }

  .img-back {
    width: 15% !important;
  }

  .footerstyle {
    position: fixed !important;
    top: 0 !important;
    left: 0;
    right: 0;
    z-index: 1030 !important;
  }

  .font20 {
    font-size: 20px !important;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .navbar-Container {
      max-width: 100vw;
    }

    .img-back {
      width: 15% !important;
    }

    .fontipad {
      font-size: 30px !important;
    }
  }
}
</style>
