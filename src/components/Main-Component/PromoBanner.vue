<template>
  <div class="col-md-12 col-12 p-0">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div>
        <h1 class="font16 ml-4 mb-2 mt-2 font-weight-bold">Promo Kami</h1>
      </div>
      <div class="carousel-inner px-4">
        <div class="carousel-item table-bordered active radius">
          <div class="col p-0">
            <img
              src="../../assets/image-promo.png"
              class="w-100 p-0 m-0"
              style="min-height:100%"
              alt
            />
            <div class="row justify-content-center d-flex spaceCarousel mt-3">
              <div class="col px-4">
                <h4 class="font-weight-bold font12 text-left font13 my-0 py-0">Promo Oreo</h4>
                <p class="font12 text-left font10 text-black-50">Nikmati promo Oreo dari kami</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item table-bordered radius">
          <div class="col p-0">
            <img
              src="../../assets/image-promo.png"
              class="w-100 p-0 m-0"
              style="min-height:100%"
              alt
            />
            <div class="row justify-content-center d-flex spaceCarousel mt-3">
              <div class="col px-4">
                <h4 class="font-weight-bold font12 text-left font13 my-0 py-0">Promo Oreo</h4>
                <p class="font12 text-left font10 text-black-50">Nikmati promo Oreo dari kami</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.font16 {
  font-size: 16px;
}

.radius {
  border-radius: 24px;
}

.font12 {
  font-size: 12px;
}

.table-bordered {
  border: 1px solid #d3d3d3 !important;
}
</style>
