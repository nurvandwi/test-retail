<template>
  <div class="mb-3">
    <h1 class="font16 font-weight-bold mt-4 ml-4">Data Kegiatan Promosi</h1>
    <div class="col-12">
      <router-link :to="{ path: 'registrasi'}">
        <div class="col shadow1 br text-left d-flex flex-row align-items-center my-3 py-2 px-3">
          <img class="imagecustom pr-3" src="../../assets/icon-ktp.png" alt />

          <div class="align-items-center">
            <h5 class="font14 formh2 caption4 p-0 m-0 text-dark">Data E-KTP & Data Bank</h5>
          </div>
          <img class="iconcustom ml-auto" src="https://i.imgur.com/5qg2kk5.png" alt />
        </div>
      </router-link>
    </div>

    <div class="col-12">
      <router-link :to="{ path: 'posm'}">
        <div class="col shadow1 text-left br d-flex flex-row align-items-center my-3 py-2 px-3">
          <img class="imagecustom pr-3" src="../../assets/icon-posm.png" alt />

          <div class="align-items-center">
            <h5 class="font14 formh2 caption4 p-0 m-0 text-dark">Upload Foto POSM & INVOICE</h5>
          </div>
          <img class="iconcustom ml-auto" src="https://i.imgur.com/5qg2kk5.png" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.imagecustom {
  background-size: cover;
  height: 46px;
}

.shadow1 {
  filter: drop-shadow(0px 10px 10px rgba(240, 248, 255, 0.1));
}

.br {
  border: 1px #d3d3d3 solid;
  border-radius: 15px;
}

.iconcustom {
  background-size: cover;
  height: 15px;
}

.font16 {
  font-size: 16px;
}

.font14 {
  font-size: 14px;
}
</style>
