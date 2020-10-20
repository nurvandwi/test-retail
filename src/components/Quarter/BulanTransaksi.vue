<template>
  <div class="container">
    <section
      class="section-stats row justify-content-center mt-3 rounded-right rounded-left"
    >
      <div class="col-12 col-md-12 pt-2 stats-details">
        <h2 class="text-white font22 font-custom m-0">Bulan Transaksi</h2>
        <p class="font8 pb-0 m-0 text-white font-custom font-weight-bolder">
          Pilih Bulan Transaksi untuk melihat Detail Penjualan, Poin, dan Rebate
        </p>
      </div>
      <div class="content m-0">
        <table class="table px-0 mb-1">
          <thead>
            <tr>
              <th scope="col" v-for="point in points.data" :key="point.id">
                <button
                  @click="selected = point.bulan"
                  type="button"
                  class="btn font-custom rounded-pill font-weight-bolder btn-light"
                >
                  <h3 class="font12 mb-0 font-weight-bold">
                    {{ point.bulan }}
                  </h3>
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
    <div class="row text-center rows-col-3 mt-3">
      <div class="col bg-blue text-white py-2 font-custom">
        PENJUALAN PER BULAN
      </div>
      <div class="table-bordered col-12">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              HISTORIKAL PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
        </div>
        <div
          class="row text-center mb-2 border-bottom"
          v-for="monthPoint in selectTab"
          :key="monthPoint.id"
        >
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">
              {{ monthPoint.total_sales }}
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-danger font-weight-bolder">
              Rp -172.999.999.000
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-custom font-weight-bolder">
              159,20%
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (STATUS SUKSES >= 100%, GAGAL < 100%)
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center rows-col-3 mt-3">
      <div class="col bg-blue text-white py-2 font-custom">
        DETAIL PENJUALAN MEDIO BULAN
      </div>
      <div class="table-bordered col-12">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              HISTORIKAL PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              TARGET PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">
              123
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              AKTUAL PENJUALAN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-danger font-weight-bolder">
              Rp -172.999.999.000
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">
              Rp 172.999.999.000
            </h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-custom font-weight-bolder">
              SELISIH PENJUALAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-custom font-weight-bolder">
              159,20%
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (STATUS SUKSES >= 100%, GAGAL < 100%)
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center rows-col-3 mt-3">
      <div class="col font-custom bg-blue text-white py-2">POIN PER BULAN</div>
      <div class="table-bordered col-12 rounded-bottom">
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right: 1px solid #d3d3d3; ">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              PEROLEHAN
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              CARRY OVER
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              POIN TERSEDIA
            </h2>
          </div>
          <div class="col">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              PENUKARAN POIN
            </h2>
          </div>
        </div>
        <div class="row text-center mb-2 border-bottom">
          <div class="col font10" style="border-right:1px solid #d3d3d3;">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder">172.999,99</h2>
          </div>
        </div>
        <div class="row text-center mt-2">
          <div class="col font10">
            <h2 class="font10 text-gray font-weight-bolder font-custom">
              SISA POIN
            </h2>
          </div>
          <div class="col">
            <h2 class="font14 text-black font-weight-bolder font-custom">
              260.885.65
            </h2>
          </div>
        </div>
        <div class="text-center mb-2">
          <div class="col font10">
            <h2 class="font10 text-black-50 font-weight-bolder">
              <!-- eslint-disable -->
              (CARRY OVER KE QUARTER BERIKUTNYA)
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center mb-custom mt-3">
      <div class="col-12 table-top col-md-12 bg-blue d-flex">
        <div
          class="font12 p-0 text-white text-left border-right col-sm-4 col-4 py-2"
        >
          TYPE REBATE
        </div>
        <div
          class="text-center p-0 font12 text-white border-right col-sm-4 col-4 py-2"
        >
          NILAI REBATE
        </div>
        <div class="font12 p-0 text-center text-white col-sm-4 col-4 py-2">
          TGL TRANSFER
        </div>
      </div>
      <div class="col-12 table-bordered rounded-bottom ">
        <div class="row mt-2 border-bottom">
          <div class="col-4 col-md-4 py-0 px-0">
            <h2 class="font12 col-12 text-left text-gray  font-weight-bolder">
              Rebate Medio
            </h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font12 font-weight-bolder">1.018.046</h2>
          </div>
          <div class="col-4 text-center">
            <h2 class="font12 font-weight-bolder">17/08/2020</h2>
          </div>
        </div>
        <div class="row mt-2 border-bottom">
          <div class="col-4 p-0 col-md-4 ">
            <h2
              class="font12 col-12 font-custom text-left text-gray font-weight-bolder"
            >
              Rebate Bulanan
            </h2>
          </div>
          <div class="col-4 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              1.018.046
            </h2>
          </div>
          <div class="col-4 col-md-4 text-center">
            <h2 class="font12 position-relative font-weight-bolder">
              17/08/2020
            </h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4 col-md-4 py-0 ">
            <h2 class="font12 text-black text-left font-weight-bolder">
              Total Rebate
            </h2>
          </div>
          <div class="col-4 col-md-4">
            <h2 class="font12 text-black font-weight-bolder">1.018.046</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "all",
      points: {
        data: []
      }
    };
  },
  methods: {
    monthTabs() {
      axios
        .get(`http://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet`, {
          headers: {
            version: this.$route.params.version
          },
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })

        .then(res => {
          console.log(res.data);
          this.points = res.data;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    selectTab() {
      return this.points.data.filter(x => x.bulan === this.selected);
    }
  },
  mounted() {
    this.monthTabs();
  }
};
</script>

<style scoped>
.content {
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 100%;
}

.content::-webkit-scrollbar {
  display: none;
}

.btn-outline-warning {
  border-color: #d3d3d3;
}
.font11 {
  font-size: 11px;
}

.table th {
  border: none !important;
}

.font9 {
  font-size: 9px;
}

.font8 {
  font-size: 8px;
}

.font22 {
  font-size: 22px;
}

.font-weight-500 {
  font-weight: 500;
}

.text-top {
  margin-top: -10px;
}

.section-stats {
  background-color: #41009a;
}
.btn-month {
  margin-top: -18px;
}

.rounded-right {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
}

.btn-light:hover {
  background-color: #ffcc00;
}

/* detail-pejualan */

.mb-custom {
  margin-bottom: 5rem;
}

.bg-blue {
  background-color: #6a813d;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border-color: #6a813d !important;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}

.text-blue {
  color: #7fceeb;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}

.font10 {
  font-size: 10px;
}

.font14 {
  font-size: 14px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
