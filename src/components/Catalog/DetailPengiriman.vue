<template>
  <div>
    <div v-if="contentFor === 'OrderDetails'" class="card mt-4 mb-details">
      <div class="row no-gutters bg radius">
        <div class="col-md-12 col-12 mb-5">
          <h5 class="card-title font16 font-weight-bold pt-3">Detail Pengiriman</h5>
          <table class="table table-borderless">
            <tbody class="py-0">
              <tr>
                <td class="py-0" scope="row">Nama</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Robby Benta Tarigan</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Alamat</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Jln. Muwardi No 45</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">RT/RW</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">001/0031</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Kode POS</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">201756</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Provinsi</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Aceh</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Kabupaten</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Aceh Singkil</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Kecamatan</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Singkil</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Kelurahan</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">Pasar Singkil</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">No HP</td>
                <td class="py-0" scope="row">:</td>
                <td class="py-0" colspan="10">08568764563</td>
              </tr>
              <tr>
                <td class="py-0" scope="row">Status</td>
                <td class="py-0" scope="row">:</td>
                <td
                  class="py-1 px-4 font14 ml-2 font-weight-bold rounded-pill badge badge-info text-center"
                  colspan="12"
                  style="background-color:#4BFF88;"
                >Sukses</td>
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
            <h5 class="card-title font16 font-weight-bold pt-3">Detail Pengiriman</h5>
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
                  >Proses</td>
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
            <h5 class="card-title font16 font-weight-bold pt-3">Detail Pengiriman</h5>
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
                  >Proses</td>
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
            <h5 class="card-title font16 font-weight-bold pt-3">Detail Pengiriman</h5>
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
                  >Proses</td>
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
            <h5 class="card-title font16 font-weight-bold pt-3">Detail Pengiriman</h5>
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
                  >Proses</td>
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
export default {
  props: ["contentFor"]
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

.font14 {
  font-size: 14px;
}

.font12 {
  font-size: 12px;
}
.mb-details{
  margin-bottom:7rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mb-details{
    margin-bottom:2rem;
  }
  .font16 {
    font-size: 16px !important;
  }
}
</style>
