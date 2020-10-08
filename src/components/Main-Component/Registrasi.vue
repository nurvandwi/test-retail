<template>
  <div class="row justify-content-center mx-2">
    <div class="col-md-8 text-left d-flex flex-row align-items-center mt-2 p-0">
      <img
        class="mr-3 icon-user"
        src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png"
      />
      <div>
        <h2 class="font18 font-weight-bold mb-0">Data Registrasi</h2>
        <p class="font14 mb-0">Mohon Lengkapi Data dibawah ini</p>
      </div>
    </div>
    <div class="col-md-12 col-12 p-0 m-0">
      <div class="theme-color p-2 rounded mt-2">
        <h3 class="font18 mb-0 pb-0 text-white text-center">100000-ANE003</h3>
      </div>
      <h4 class="mt-4 text-left font16 font-weight-bold mb-0">Input Data Outlet</h4>
      <p class="p-0 my-0 text-left font12">Nomor EKTP & Nomor Handphone/WA wajib diisi</p>
      <form action class="mb-5 pb-5">
        <div class="form-row mt-4">
          <div class="form-group col-md-12 col-12 text-left mb-3">
            <input type="text" class="form-control" placeholder="Nama Pemilik" />
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="number" class="form-control" placeholder="No EKTP" />
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="number" class="form-control" placeholder="No HP" />
          </div>
          <div
            class="form-group m-auto justify-content-center grid-image border mb-0 col-md-12 col-12"
          >
            <div class>
              <image-uploader
                :debug="1"
                :maxWidth="512"
                :quality="0.3"
                :autoRotate="true"
                outputFormat="string"
                :preview="false"
                :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
                capture="environment"
                accept="video/*, image/*"
                doNotResize="['gif', 'svg']"
              >
                <label for="fileInput" slot="upload-label" class="mt-3 mb-0">
                  <figure class="m-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        class="path1"
                        d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                      />
                    </svg>
                  </figure>
                  <span
                    class="upload-caption d-flex justify-content-center pb-3 font-weight-bold"
                  >{{ 'Upload KTP' }}</span>
                </label>
              </image-uploader>
            </div>
          </div>
          <h4 class="font-weight-bold font16 mx-2 mt-4 mb-0">Input Data Bank</h4>
          <p class="font10 mx-2">Data Rekening Bank wajib diisi sesuai dengan data di buku bank</p>
          <div class="form-group col-md-12 col-12 text-left mb-3">
            <div class="input-group mb-0">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Pilih Bank</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="text" class="form-control" placeholder="Cabang Nasabah" />
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="number" class="form-control" placeholder="Nomor Rekening" />
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="text" class="form-control" placeholder="Nama Nasabah" />
          </div>
          <div class="form-group col-md-6 col-6 text-left mb-3">
            <input type="text" class="form-control" placeholder="Kota Tujuan" />
          </div>
          <div
            class="form-group col-md-12 col-12 py-2 grid-image m-auto justify-content-center border mb-0"
          >
            <div class>
              <image-uploader
                :debug="1"
                :maxWidth="512"
                :quality="0.3"
                :autoRotate="true"
                outputFormat="string"
                :preview="false"
                :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
                capture="environment"
                accept="video/*, image/*"
                doNotResize="['gif', 'svg']"
              >
                <label for="fileInput" slot="upload-label" class="mt-3 mb-0">
                  <figure class="m-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        class="path1"
                        d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                      />
                    </svg>
                  </figure>
                  <span
                    class="upload-caption d-flex justify-content-center font-weight-bold pb-3"
                  >{{ 'Upload BUKU BANK' }}</span>
                </label>
              </image-uploader>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary col-md-12 col-12 mt-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import ImageUploader from "vue-image-upload-resize";
export default {
  name: "Registrasi",
  components: {
    ImageUploader
  }
};
</script>

<style>
.icon-user {
  height: 60px;
}

.grid-image {
  display: grid;
}

.theme-color {
  background-color: #4e37b2;
}
.fileinput {
  display: none;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .font10 {
    font-size: 10px;
  }
  .icon-user {
    height: 50px;
  }
  .font12 {
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