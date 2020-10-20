<template>
  <div>
    <div v-if="contentFor === 'OrderDetails'" class="card mt-4 mb-details">
      <div class="row no-gutters bg radius">
        <div class="col-md-12 col-12 mb-5">
          <h4 class="card-title font16 font-weight-bold pt-3">
            Detail Pengiriman
          </h4>
          <table class="table table-borderless">
            <tbody class="py-0">
              <tr>
                <td class="py-0" scope="row"><h4 class="font16">Nama</h4></td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.outlet_name}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row"><h4 class="font16">Alamat</h4></td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.alamat2}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row"><h4 class="font16">RT/RW</h4></td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.rtrw}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">Kode Pos</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.kodepos}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">Provinsi</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10"><h4 class="font16">{{data_user.propinsi}}</h4></td>
              </tr>
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">Kabupaten</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.kabupaten}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">Kecamatan</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.kecamatan}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">Kelurahan</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.kelurahan}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row"><h4 class="font16">No HP</h4></td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{data_user.teleponwali1}}</h4>
                </td>
              </tr>
              <tr>
                <td class="py-0" scope="row"><h4 class="font16">Status</h4></td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td
                  class="py-1 px-4 font14 ml-2 font-weight-bold rounded-pill badge badge-info text-center"
                  colspan="12"
                  style="background-color:#4BFF88;"
                >
                  <h4 class="font16 mb-0">Sukses</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PulsaDetails'" class="card mt-4 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h5 class="card-title font16 font-weight-bold pt-3">
              Detail Pengiriman
            </h5>
            <table class="table table-borderless">
              <tbody class>
                <tr>
                  <td class="py-1" scope="row">No HP</td>

                  <td class="py-1" colspan="10">0817777777777</td>
                </tr>
                <tr>
                  <td class="py-1" colspan="9" scope="row">Status</td>
                  <td colspan></td>
                  <td
                    class="py-1 mt-2 mr-custom font-weight-bold rounded-pill badge badge-info"
                  >
                    Proses
                  </td>
                </tr>
                <tr>
                  <td class="py-1" scope="row">No S/N</td>

                  <td class="py-1" colspan="10">12345676890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'EwalletDetails'" class="card mt-4 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h5 class="card-title font16 font-weight-bold pt-3">
              Detail Pengiriman
            </h5>
            <table class="table table-borderless">
              <tbody class>
                <tr>
                  <td class="py-1" scope="row">No HP</td>

                  <td class="py-1" colspan="10">0817777777777</td>
                </tr>
                <tr>
                  <td class="py-1" colspan="9" scope="row">Status</td>
                  <td colspan></td>
                  <td
                    class="py-1 mt-2 mr-custom font-weight-bold rounded-pill badge badge-info"
                  >
                    Proses
                  </td>
                </tr>
                <tr>
                  <td class="py-1" scope="row">No S/N</td>

                  <td class="py-1" colspan="10">12345676890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PointCashDetails'" class="card mt-4 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h5 class="card-title font16 font-weight-bold pt-3">
              Detail Pengiriman
            </h5>
            <table class="table table-borderless">
              <tbody class>
                <tr>
                  <td class="py-1" scope="row">Nama Rekening</td>

                  <td class="py-1" colspan="10">Ahmad Eko</td>
                </tr>

                <tr>
                  <td class="py-1" scope="row">Nama Bank</td>

                  <td class="py-1" colspan="10">BCA</td>
                </tr>
                <tr>
                  <td class="py-1" scope="row">No Rekening</td>

                  <td class="py-1" colspan="10">123456789012</td>
                </tr>
                <tr>
                  <td class="py-1" colspan="9" scope="row">Status</td>
                  <td colspan></td>
                  <td
                    class="py-1 mt-2 mr-custom font-weight-bold rounded-pill badge badge-info"
                  >
                    Proses
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'RebateDetails'" class="card mt-4 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h5 class="card-title font16 font-weight-bold pt-3">
              Detail Pengiriman
            </h5>
            <table class="table table-borderless">
              <tbody class>
                <tr>
                  <td class="py-1" scope="row">Nama Rekening</td>

                  <td class="py-1" colspan="10">Ahmad Eko</td>
                </tr>

                <tr>
                  <td class="py-1" scope="row">Nama Bank</td>

                  <td class="py-1" colspan="10">BCA</td>
                </tr>
                <tr>
                  <td class="py-1" scope="row">No Rekening</td>

                  <td class="py-1" colspan="10">123456789012</td>
                </tr>
                <tr>
                  <td class="py-1" colspan="9" scope="row">Status</td>
                  <td colspan></td>
                  <td
                    class="py-1 mt-2 mr-custom font-weight-bold rounded-pill badge badge-info"
                  >
                    Proses
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["contentFor"],
  data() {
    return {
      data_user: {} };
  },
  methods: {
    getDetailUser() {
      axios
        .get(`https://www.inosis.co.id/mvg2020_api/api_reg.php/detail-outlet`, {
          params: {
            txtKodeOutlet: this.$route.params.outlet_id
          }
        })
        .then(res => (this.data_user = res.data.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getDetailUser();
  }
};
</script>

<style scoped>
.mr-custom {
  position: relative;
  right: 40px;
}

.bg {
  background-color: #ffffff;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.03));
}

.card {
  border: none !important;
}

.mb-details {
  margin-bottom: 7rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mb-details {
    margin-bottom: 2rem;
  }
  .font12 {
    font-size: 12px;
  }
  .font16 {
    font-size: 16px !important;
  }
  .font14 {
    font-size: 14px;
  }
}
</style>
