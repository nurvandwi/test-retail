<template>
  <div>
    <div v-if="contentFor === 'OrderDetails'" class="card mt-3 mb-details">
      <div class="row no-gutters bg radius">
        <div class="col-md-12 col-12 mb-5" >
          <h4 class="card-title font18 font-weight-bold pt-3 px-3">
            Detail Pengiriman
          </h4>
          <div class="px-1"><table class="table table-borderless">
            <tbody class="py-0 ">
            <tr >
              <td class="py-0 " scope="row"><h4 class="font16 ">Nama</h4></td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.outlet_name }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row"><h4 class="font16">Alamat</h4></td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.alamat2 }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row"><h4 class="font16">RT/RW</h4></td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.rtrw }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row">
                <h4 class="font16">Kode Pos</h4>
              </td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.kodepos }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row">
                <h4 class="font16">Provinsi</h4>
              </td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.propinsi }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row">
                <h4 class="font16">Kabupaten</h4>
              </td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.kabupaten }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row">
                <h4 class="font16">Kecamatan</h4>
              </td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.kecamatan }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row">
                <h4 class="font16">Kelurahan</h4>
              </td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.kelurahan }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row"><h4 class="font16">No HP</h4></td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td class="py-0" colspan="10">
                <h4 class="font16">{{ data_user.teleponwali1 }}</h4>
              </td>
            </tr>
            <tr>
              <td class="py-0" scope="row"><h4 class="font16">Status</h4></td>
              <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
              <td
                  class="py-1 px-4 font14 ml-2 bg-process font-weight-bold rounded-pill badge badge-info text-center"
                  colspan="12"
              >
                <h4 class="font16 mb-0">Proses</h4>
              </td>
            </tr>
            </tbody>
          </table></div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PulsaDetails'" class="card mt-3 mb-details" >
      <div class="card mt-4" v-for="item in cartPulsa"
           :key="item.id">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h4 class="card-title font18 font-weight-bold pt-3 px-3">
              Detail Pengiriman
            </h4>
            <div class="px-1"> <table class="table table-borderless">
              <tbody class="py-0">
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">No Hp</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{item.no_hp}}</h4>
                </td>
              </tr>


              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16 py-1">Status</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16 py-1">:</h4></td>
                <td
                        class="py-1 px-4 font14 ml-2 bg-process font-weight-bold rounded-pill badge badge-info text-center"
                        colspan="12"
                >
                  <h4 class="font14 mb-0">Proses</h4>
                </td>
              </tr>
<!--              <tr>-->
<!--                <td class="py-0" scope="row">-->
<!--                  <h4 class="font16">No S/N</h4>-->
<!--                </td>-->
<!--                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>-->
<!--                <td class="py-0" colspan="10">-->
<!--                  <h4 class="font16">1343535</h4>-->
<!--                </td>-->
<!--              </tr>-->
              </tbody>
            </table></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'EwalletDetails'" class="card mt-3 mb-details">
      <div class="card mt-4" v-for="item in cartEwallet"  :key="item.id">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h4 class="card-title font18 font-weight-bold pt-3 px-3">
              Detail Pengiriman
            </h4>
            <div class="px-1"> <table class="table table-borderless">
              <tbody class="py-0">
              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16">No Hp</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
                <td class="py-0" colspan="10">
                  <h4 class="font16">{{item.no_hp}}</h4>
                </td>
              </tr>


              <tr>
                <td class="py-0" scope="row">
                  <h4 class="font16 py-1">Status</h4>
                </td>
                <td class="py-0" scope="row"><h4 class="font16 py-1">:</h4></td>
                <td
                        class="py-1 px-4 font14 ml-2 bg-process font-weight-bold rounded-pill badge badge-info text-center"
                        colspan="12"
                >
                  <h4 class="font14 mb-0">Proses</h4>
                </td>
              </tr>

              </tbody>
            </table></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'PointCashDetails'" class="card mt-3 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h4 class="card-title font18 font-weight-bold pt-3 px-3">
              Detail Pengiriman
            </h4>
           <div class="px-1"> <table class="table table-borderless">
             <tbody class="py-0">
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Nama Rekening</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nama_rekening }}</h4>
               </td>
             </tr>
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Nama Bank</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nama_bank }}</h4>
               </td>
             </tr>
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">No Rekening</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nomor_rekening }}</h4>
               </td>
             </tr>

             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Status</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td
                   class="py-1 px-4 font14 ml-2 bg-process font-weight-bold rounded-pill badge badge-info text-center"
                   colspan="12"
               >
                 <h4 class="font16 mb-0">Proses</h4>
               </td>
             </tr>
             </tbody>
           </table></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'RebateDetails'" class="card mt-3 mb-details">
      <div class="card mt-4">
        <div class="row no-gutters bg radius">
          <div class="col-md-12 col-12">
            <h4 class="card-title font18 font-weight-bold pt-3 px-3">
              Detail Pengiriman
            </h4>
           <div class="px-1"> <table class="table table-borderless">
             <tbody class="py-0">
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Nama Rekening</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nama_rekening }}</h4>
               </td>
             </tr>
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Nama Bank</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nama_bank }}</h4>
               </td>
             </tr>
             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">No Rekening</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td class="py-0" colspan="10">
                 <h4 class="font16">{{ data_user.nomor_rekening }}</h4>
               </td>
             </tr>

             <tr>
               <td class="py-0" scope="row">
                 <h4 class="font16">Status</h4>
               </td>
               <td class="py-0" scope="row"><h4 class="font16">:</h4></td>
               <td
                   class="py-1 px-4 font14 ml-2 bg-process font-weight-bold rounded-pill badge badge-info text-center"
                   colspan="12"
               >
                 <h4 class="font16 mb-0">Proses</h4>
               </td>
             </tr>
             </tbody>
           </table></div>
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
      data_user: {}
    };
  },
  methods: {
    getDetailUser() {
      axios
        .get(`https://inosis.co.id/mv_demo_api/api_reg.php/detail-outlet`, {
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
  },
  computed:{
    cartPulsa() {
      return this.$store.state.cartPulsa;
    },
    cartEwallet() {
      return this.$store.state.cartEwallet;
    }
  }
};
</script>

<style scoped>
.bg-success {
  background-color: #40c351 !important;
}
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
.bg-process {
  background-color: #ffc14b;
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
