<template>
  <div class="container mt-4" data-aos="fade-up">
    <div class="d-flex align-items-center">
      <h3 class="font22 m-0" style="font-weight:bolder;">Input Data</h3>

      <div v-if="selected === 'Dana'">
        <img
          src="../../assets/icon-dana.png"
          class="icon-ewallet pl-2"
          alt="..."
        />
      </div>
      <div v-else-if="selected === 'Ovo'">
        <img
          src="../../assets/icon-ovo.png"
          class="icon-ewallet pl-2"
          alt="..."
        />
      </div>
      <div v-else></div>
    </div>
    <form>
      <div class="form-row mt-3">
        <div class="col-12">
          <input
            type="number"
            class="form-control"
            placeholder="Nomor Account"
          />
        </div>
        <div class="col-12 mt-2">
          <select
            v-model="selected"
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option
              v-for="option in options"
              :key="option.index"
              v-bind:value="option.value"
              >{{ option.text }}</option
            >
          </select>
        </div>
        <div class="col-md-12" v-if="selected === 'Dana'">
          <div class="row px-2 pt-4">
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">5.000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">10.000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">25000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">50000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <router-link v-bind:to="'/ewalletdetails'" class="text-dark">
                <div class="card border w-100">
                  <div class="card-body p-3">
                    <h5 class="card-title text-center m-0">100000</h5>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">150000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" v-if="selected === 'Ovo'">
          <div class="row px-2 pt-4">
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">5.000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">10.000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">25000</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 px-2 pb-3">
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">50000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: "",
      selected: "Pilih Jenis E-wallet",
      options: [
        { text: "Pilih Jenis E-wallet", value: "Pilih Jenis E-wallet" },
        { text: "Dana", value: "Dana" },
        { text: "Ovo", value: "Ovo" },
      ],
    };
  },
};
</script>

<style scoped>

::-webkit-input-placeholder {
  color: #9e9eff !important;
}
:-moz-placeholder {
  color: #9e9eff !important;
}
::-moz-placeholder {
  color: #9e9eff !important;
}
:-ms-input-placeholder {
  color: #9e9eff !important;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4e37b2 !important;
  background-color: rgba(235, 235, 255, 0.15) !important;
  background-clip: padding-box;
  border: 1px solid #ebebff !important;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.icon-ewallet {
  height: 27px;
}
@media screen and (max-width: 1000px) {
  .font22 {
    font-size: 22px;
  }
  .icon-ewallet {
    height: 27px;
  }
}
</style>
