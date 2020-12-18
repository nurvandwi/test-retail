<template>
  <div class="container mt-custom mt-3">
    <div class="row text-left rows-col-3">
      <div
        class="col bg-blue d-flex justify-content-between border-panel font-weight-bold text-blue py-2 font-custom"
      >
        <h5 class=" font-theme font-custom font-weight-bold font16 my-2">
          {{ detailTransaksi.kode_transaksi }}
        </h5>

        <div>
          <img height="15px" src="#" alt srcset />
        </div>
      </div>

      <div
        class="table-bordered col-12"
        style="background-color: white"
        v-if="
          detailTransaksi.item == 'rebate' ||
            detailTransaksi.item == 'pointocash'
        "
      >
        <div class="row text-left mt-2 mb-3">
          <div class="col-12 font10">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Penerima
            </h5>
            <h5 class="font14 text-success font-weight-bolder break-word">
              {{ detailTransaksi.nama_penerima }}
            </h5>
          </div>
        </div>
        <div class="row text-left mb-3">
          <div class="col-12">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No.Referensi
            </h5>

            <h5 class="font14 text-success font-weight-bolder">
              {{ detailTransaksi.noreferensi }}
            </h5>
          </div>
        </div>
        <div class="row text-left mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Tgl Transfer
            </h5>
            <h5 class="font14 text-success font-weight-bolder">
              {{ detailTransaksi.tanggal_terima }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No EKTP
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.ektp }}
            </h5>
          </div>
        </div>
        <div class="row text-left mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Bank
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.rekening_bank }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No Rekening
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.rekening_nomor }}
            </h5>
          </div>
        </div>
        <div class="row text-left mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Cabank Bank
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.rekening_cabang }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Kota Bank
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.rekening_kota }}
            </h5>
          </div>
        </div>
      </div>
      <div class="table-bordered col-12" style="background-color: white" v-else>
        <div class="row text-left mt-2 mb-3">
          <div class="col-12">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Penerima
            </h5>
            <h5 class="font14 text-success font-weight-bolder">
              {{ detailTransaksi.nama_penerima }}
            </h5>
          </div>
        </div>
        <div class="row text-left mt-2 mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Tgl Terima
            </h5>
            <h5 class="font14 text-success font-weight-bolder">
              {{ detailTransaksi.tanggal_terima }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No Ektp
            </h5>
            <h5 class="font14 text-success font-weight-bolder">
              {{ detailTransaksi.ektp }}
            </h5>
          </div>
        </div>
        <div class="row text-left  mb-3">
          <div class="col-12">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Alamat
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.outlet_alamat }}
            </h5>
          </div>
        </div>

        <div class="row text-left  mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Kecamatan
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.outlet_kecamatan }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Kota/Kab
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.outlet_kabupaten }}
            </h5>
          </div>
        </div>
        <div class="row text-left  mb-3">
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              Provinsi
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.outlet_propinsi }}
            </h5>
          </div>
          <div class="col-6">
            <h5 class="font16 font-gray font-custom font-weight-light">
              No.Telepon
            </h5>
            <h5 class="font14 text-black font-weight-bolder">
              {{ detailTransaksi.outlet_handphone }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["detailTransaksi"],
  data() {
    return {
      data_user: {},
    };
  },
  methods: {
    getDetailUser() {
      axios
        .get(`${process.env.VUE_APP_URL}detail-outlet`, {
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
          },
        })
        .then((res) => (this.data_user = res.data.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getDetailUser();
  },
};
</script>

<style scoped>
.break-word {
  word-wrap: break-word;
}

.border-panel {
  border-top: 1.2px solid #dedede;
  border-bottom: 0 solid #dedede;
  border-left: 1.2px solid #dedede;
  border-right: 1.2px solid #dedede;
}

.bg-blue {
  background-color: #eee9ff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border-top: 0px solid #dedede !important;
  border-left: 1.2px solid #dedede !important;
  border-right: 1.2px solid #dedede !important;
  border-bottom: 1.2px solid #dedede !important;
  border-bottom-left-radius: 18px !important;
  border-bottom-right-radius: 18px !important;
}

.text-blue {
  color: #4e37b2;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}

.font-gray {
  color: #b6b6b6;
}

.font-theme {
  color: #4e37b2;
}

@media screen and (max-width: 1000px) {
  .font10 {
    font-size: 10px;
  }

  .font12px {
    font-size: 12px;
  }

  .font14 {
    font-size: 14px;
  }

  .font16 {
    font-size: 16px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
