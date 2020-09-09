<template>
  <div class="m-0 p-0">
    <div class="card text-white justify-content-center" v-if="contentFor==='categories'">
      <img class="card-img img-Hero" src="../../assets/Hero-Banner.png" alt="Card image" />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col-md-12">
          <h1 class="card-title font18 font-weight-bolder">Kategori Reward</h1>
          <p class="card-text font14">
            Tukar Poin anda,
            <br />dengan list reward dibawah ini
          </p>
          <h1 style="width:43px;  border: 2px #e8e8e8 solid;"></h1>
        </div>
      </div>
    </div>
    <div class="card text-white justify-content-center" v-if="contentFor==='home'">
      <img class="card-img img-Hero" src="../../assets/Home-banner.png" alt="Card image" />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col ml">
          <h1 class="card-title font18 font-weight-bolder" data-aos="fade-down">Hi, Adam Jaya</h1>
          <p
            class="card-text font14"
            data-aos="fade-down"
            data-aos-duration="600"
          >Pantau poin anda sekarang</p>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'Login'">
      <div class="row d-flex">
        <div class="col-md-8 col-7 align-self-center">
          <h1 class="font-26 font-19 font-weight-bold">Hi, Selamat Datang</h1>
          <p class="font12">Pantau Poin Anda Sekarang</p>
        </div>
        <div class="col-md-4 col-5 p-0 m-0">
          <img src="../../assets/hero-login.png" class="img-fluid" style="max-width:100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contentFor"]
};
</script>

<style scoped>
.card {
  border: none !important;
}
.img-Hero {
  max-width: 100% !important;
  min-height: auto !important;
}
@media screen and (max-width: 1000px) {
  .img-Hero {
    max-width: 100vw;
    min-height: 10vh !important;
  }
  .font18 {
    font-size: 18px;
  }
  .font14 {
    font-size: 14px;
  }
  .h1,
  .h3,
  .h4,
  .h5,
  .h6,
  .p {
    font-family: "Montserrat", sans-serif !important;
  }

  .font-26 {
    font-size: 26px;
  }

  .font12 {
    font-size: 12px;
  }

  .mt-custom {
    margin-top: 5rem;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .font-19 {
      font-size: 19px;
    }
    .mt-custom {
      margin-top: 5rem;
    }
  }
}
</style>