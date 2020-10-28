<template>
  <div>
    <div
      class="container jumbotron jumbotron-fluid pt-0 m-0"
      v-if="contentFor === 'Quarter'"
    >
      <section class="section-stats row justify-content-center">
        <div class="col-12 col-md-12 stats-details mt-3 ">
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
          <div class="p-custom">
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
    <div
      class="container jumbotron jumbotron-fluid pt-0 m-0"
      v-if="contentFor === 'MonthToYear'"
    >
      <section class="section-stats row justify-content-center">
        <div class="col-12 col-md-12 stats-details mt-3 ">
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
          <div class="p-custom">
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
    <div
      class="container jumbotron jumbotron-fluid pt-0 m-0"
      v-if="contentFor === 'MonthToMonth'"
    >
      <section class="section-stats row justify-content-center">
        <div class="col-12 col-md-12 stats-details mt-3 ">
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
          <div class="p-custom">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BoxQuarter",
  props: [
    "nama_outlet",
    "contentFor",
    "id_outlet",
    "sisa_point",
    "saldo_rebate"
  ],
  methods: {
    push() {
      this.$router.push("/");
    },
    allQuarter() {
      axios
        .get("https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet", {
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
    },
    monthToYear() {
      axios
        .get(
          "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mty",
          {
            params: {
              txtKodeOutlet: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )

        .then(res => (this.year = res.data))
        .catch(err => console.log(err));
    },
    monthToMonth() {
      axios
        .get(
          "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mtm",
          {
            headers: {
              version: this.$route.params.bulan
            },
            params: {
              txtKodeOutlet: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )

        .then(res => (this.month = res.data))
        .catch(err => console.log(err));
    }
  },

  data() {
    return {
      selected: this.$route.params.version
    };
  },

  computed: {
    btnHover1() {
      console.log(this.selected);
      return 1 == this.$route.params.version;
    },
    btnHover2() {
      console.log(this.selected);
      return 2 == this.$route.params.version;
    },
    btnHover3() {
      console.log(this.selected);
      return 3 == this.$route.params.version;
    },
    btnHover4() {
      console.log(this.selected);
      return 4 == this.$route.params.version;
    }
  },
  mounted() {
    this.allQuarter();
    this.monthToYear();
    this.monthToMonth();
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

.p-custom {
  padding-bottom: 38px;
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
  min-height: 10vh;
  height: 15vh;
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

.btnStyle {
  background-color: #ffcc00;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .section-stats {
    min-height: 20vh;
    background-color: #41009a;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030 !important;
  }

  .btn-month {
    margin-top: -138px;
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
