<template>
  <div class="container jumbotron jumbotron-fluid pt-0 m-0">
    <section class="section-stats row justify-content-center">
      <div class="col-12 col-md-12 stats-details py-2 my-4">
        <p
          class="font22 text-top text-white font-custom font-weight-bolder text-center mb-0"
        >
          {{ nama_outlet }}
        </p>

        <h2 class="font14 text-white font-custom text-center">
          {{ id_outlet }}
        </h2>
      </div>
      <div class>
        <div class="row pt-2 btn-quarter p-0">
          <div class="col-3 col-md-3 stats-details">
            <router-link
              :to="{
                path: '/Quarter/1/' + `${$route.params.outlet_id}`
              }"
            >
              <a
                v-on:click="push"
                type="button"
                class="btn font22 font-weight-bold rounded-circle btn-light"
              >
                Q1
              </a>
            </router-link>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <router-link
              class="text-white"
              :to="{
                path: '/Quarter/2/' + `${$route.params.outlet_id}`
              }"
            >
              <a
                v-on:click="push"
                type="button"
                class="btn font22 font-weight-bold rounded-circle btn-light"
              >
                Q2
              </a>
            </router-link>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <router-link
              class="text-white"
              :to="{
                path: '/Quarter/3/' + `${$route.params.outlet_id}`
              }"
            >
              <a
                v-on:click="push"
                type="button"
                class="btn font22 font-weight-bold rounded-circle btn-light"
              >
                Q3
              </a>
            </router-link>
          </div>
          <div class="col-3 col-md-3 stats-details">
            <router-link
              class="text-white"
              :to="{
                path: '/Quarter/4/' + `${$route.params.outlet_id}`
              }"
            >
              <a
                v-on:click="push"
                type="button"
                class="btn font22 font-weight-bold rounded-circle btn-light"
              >
                Q4
              </a>
            </router-link>
          </div>
        </div>
        <div class="pb-1 pt-4">
          <h1 class="text-white text-center text-left m-0 font14">
            Pilih Quarter Pilihan Anda
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div
        class=" d-flex justify-content-center quarterstyle text-center mb-3 btn-month"
      >
        <div class="row col-md-10 col-10 table-bordered bg-violet round h-53">
          <div class="col py-1 col-md-6 stats-details border-right">
            <div>
              <h2
                class="font11 m-0 text-white font-custom font-weight-bold pt-1"
              >
                SISA POIN
              </h2>
              <p class="text-blue font16 font-weight-bold m-0">
                {{ sisa_point }}
              </p>
            </div>
          </div>
          <div class="col-6 py-1 col-md-6 m-0 p-0 stats-details">
            <div>
              <h2
                class="font11 m-0 font-custom text-white pt-1 font-weight-bold"
              >
                SALDO REBATE
              </h2>
              <p class="font-weight-bold font16 text-blue m-0">
                {{ saldo_rebate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BoxQuarter",
  props: ["nama_outlet", "id_outlet", "sisa_point", "saldo_rebate"],
  methods: {
    push() {
      this.$router.push("/");
    }
  },
  mounted() {
    axios
      .get("http://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet", {
        headers: {
          version: this.$route.params.version
        },
        params: {
          txtKodeOutlet: this.$route.params.outlet_id,
          token: localStorage.token
        }
      })

      .then(res => (this.points = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.h-53 {
  height: 53px;
}

.jumbotron {
  background-color: #ffffff !important;
  padding: 0px;
}

.pb-custom {
  padding-bottom: 40px;
}

.round {
  border-radius: 20px;
}

.table-bordered {
  border: 1px solid #53448b;
}

.btn-outline-warning {
  border-color: #d3d3d3;
}
.font14 {
  font-size: 14px;
}

.text-blue {
  color: #ffcc00;
}

.font16 {
  font-size: 16px;
}

.font11 {
  font-size: 11px;
}
.font22 {
  font-size: 22px;
}

.font9 {
  font-size: 9px;
}

.font-weight-500 {
  font-weight: 500;
}

.text-top {
  margin-top: -10px;
}

.bg-violet {
  background: #ff4814;
}

.section-stats {
  min-height: 35vh;
  background-color: #41009a;
}
.btn-month {
  margin-top: -30px;
}

.btn-quarter {
  margin-top: -70px;
}

.rounded-right {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.btn-light:hover {
  background-color: #ffcc00;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .section-stats {
    min-height: 35vh;
    background-color: #41009a;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030 !important;
  }

  .quarterstyle {
    position: fixed;
    top: 35vh;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030;
  }
}
</style>
