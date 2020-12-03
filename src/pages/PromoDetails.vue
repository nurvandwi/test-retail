<template>
  <div>
    <img
      class="img-fluid"
      :src="Slider.data[$route.params.index].img_url"
      alt="promo"
      srcset=""
      style="height: 50vh"
    />
    <div class="container">
      <div class="pt-4">
        <h3 class="font-weight-bold">
          {{ Slider.data[$route.params.index].title }}
        </h3>
        <p
          class="font-weight-normal font-14 pb-5"
          v-html="Slider.data[$route.params.index].detail"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Slider: {},
    };
  },

  methods: {
    getSlider() {
      axios
        .get(`${process.env.VUE_APP_URL}banner`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token,
          },
        })
        .then((res) => (this.Slider = res.data))
        .catch((err) => console.log(err));
    },
  },

  mounted() {
    this.getSlider();
  },
};
</script>

<style scoped>
img {
  height: fit-content;
}

.font-14 {
  font-size: 14px;
  letter-spacing: 0.00001px;
  text-align: justify;
}
</style>