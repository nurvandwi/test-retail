<template>
  <div>
    <div class="mb-3" v-if="contentFor === 'home'">
      <h3 class="font16 font-weight-bold mt-4 mb-0 ml-4">Data Kegiatan</h3>
      <p class="font-12 ml-4">Lengkapi data dibawah ini.</p>
      <div class="col-12">
        <router-link v-bind:to="'/registrasi/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 br text-left d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img class="imagecustom pr-3" src="../../assets/icon-ktp.png" alt />

            <div class="align-items-center">
              <h5
                class="font14 formh2 caption4 p-0 m-0 text-dark font-weight-bold"
              >
                Data E-KTP & Data Bank
              </h5>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link v-bind:to="'/posm/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center">
              <h5 class="font14 caption4 p-0 m-0 text-dark font-weight-bold">
                Upload Foto POSM & INVOICE
              </h5>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
    </div>
    <div class="mb-3" v-if="contentFor === 'QuarterDetails'">
      <h3 class="font16 font-weight-bold mt-2 mb-0 ml-4">Data Penjualan</h3>
      <p class="font-12 ml-4">Pilih Data Penjualan Anda :</p>
      <div class="col-12">
        <router-link v-bind:to="'/MonthToYear/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 br text-left d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img class="imagecustom pr-3" src="../../assets/icon-ktp.png" alt />

            <div class="align-items-center line-height">
              <h5
                class="font14 py-1 formh2 caption4 p-0 m-0 text-dark font-weight-bold"
              >
                Month To Year
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  per tahun
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link
          v-bind:to="
            '/MonthToMonth/' + currenttime + `/${$route.params.outlet_id}`
          "
        >
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center line-height">
              <h5
                class="font14 caption4 py-1 p-0 m-0 text-dark font-weight-bold"
              >
                Month To Month
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  bulan berjalan
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link v-bind:to="'/Quarter/1/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center line-height">
              <h5
                class="font14 caption4 py-1 p-0 m-0 text-dark font-weight-bold"
              >
                Quarter 1 to Month
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  bulan berjalan Quarter 1
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link v-bind:to="'/Quarter/2/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center line-height">
              <h5
                class="font14 caption4 py-1 p-0 m-0 text-dark font-weight-bold"
              >
                Quarter 2 to Month
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  bulan berjalan Quarter 2
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link v-bind:to="'/Quarter/3/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center line-height">
              <h5
                class="font14 caption4 py-1 p-0 m-0 text-dark font-weight-bold"
              >
                Quarter 3 to Month
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  bulan berjalan Quarter 3</small
                >
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12 mb-custom">
        <router-link v-bind:to="'/Quarter/4/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/icon-posm.png"
              alt
            />

            <div class="align-items-center line-height">
              <h5
                class="font14 caption4 py-1 p-0 m-0 text-dark font-weight-bold"
              >
                Quarter 4 to Month
              </h5>
              <p class="text-dark m-auto  ">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  bulan berjalan Quarter 4
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  props: ["contentFor"],
  data() {
    return {
      currenttime: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();

      const date = today.getMonth() + 1;

      const dateTime = date;

      this.currenttime = dateTime;
    }
  }
};
</script>
<style scoped>
.imagecustom {
  width: 15%;
}

.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
  border: 0.7px solid #dedede;
}

.br {
  border-radius: 15px;
}

.mb-custom {
  margin-bottom: 5rem;
}

.iconcustom {
  background-size: cover;
  height: 15px;
}

@media screen and (max-width: 1000px) {
  .imagecustom {
    width: 20%;
  }

  .line-height {
    line-height: 12px;
  }

  small {
    font-size: 60%;
  }

  .font16 {
    font-size: 16px;
  }

  .font14 {
    font-size: 14px;
  }
  .font-12 {
    font-size: 12px;
  }
}
</style>
