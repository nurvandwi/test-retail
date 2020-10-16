<template>
  <div class="container mt-4" data-aos="fade-up">
    <div class="d-flex align-items-center">
      <h3 class="font22 m-0" style="font-weight:bolder;">Input Data</h3>

      <div v-if="state.ewallet === 'DANA'">
        <img
          src="../../assets/dana v-1.png"
          class="icon-dana pl-2"
          alt="..."
        />
      </div>
      <div v-else-if="state.ewallet === 'OVO'">
        <img
          src="../../assets/icon-ovo.png"
          class="icon-ovo pl-2"
          alt="..."
        />
      </div>
      <div v-else-if="state.ewallet === 'LINK'">
        <img
          src="../../assets/link-aja v-2.png"
          class="icon-link pl-2"
          alt="..."
        />
      </div>
      <div v-else-if="state.ewallet === 'GOPAY'">
        <img
                src="../../assets/gopay.png"
                class="icon-gopay pl-2"
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
            @change="getList()"
            v-model="state.ewallet"
            class="form-control"
            name="dataEwallet"
          >
            <option
              v-for="(row, i) in list"
              :key="i"
              v-bind:value="row.nama_produk"
              >{{ row.nama_produk }}</option
            >
          </select>
        </div>
        <div class="col-md-12">
          <div class="row px-2 pt-4">
            <div
              class="col-md-6 col-6 px-2 pb-3"
              v-for="(row, i) in listContents.data"
              :value="row.id"
              :key="i"
            >
              <div class="card border w-100">
                <div class="card-body p-3">
                  <h5 class="card-title text-center m-0">
                    {{ row.value }}
                  </h5>
                </div>
              </div>
            </div>
            <!--            <div class="col-md-6 col-6 px-2 pb-3">-->
            <!--              <router-link v-bind:to="'/ewalletdetails'" class="text-dark">-->
            <!--                <div class="card border w-100">-->
            <!--                  <div class="card-body p-3">-->
            <!--                    <h5 class="card-title text-center m-0">100000</h5>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </router-link>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      no: "",
      selected: "Pilih Jenis E-wallet",
      options: [
        { text: "Pilih Jenis E-wallet", value: "Pilih Jenis E-wallet" },
        { text: "Dana", value: "Dana" },
        { text: "Ovo", value: "Ovo" }
      ],
      list: [],
      listContents: [],
      state: {
        ewallet: "Test"
      }
    };
  },
  methods: {
    getEwallet() {
      axios
        .get(`https://www.inosis.co.id/mv_demo_api/api.php/list-ewallet`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.list = res.data.data))
        .catch(err => console.log(err));
    },
    getList() {
      axios
        .get(
          `https://www.inosis.co.id/mv_demo_api/api.php/list-ewallet-hadiah?nama_ewallet=${this.state.ewallet}`,
          {
            params: {
              outlet_id: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )
        .then(res => (this.listContents = res.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getEwallet();
    this.getList();
  }
};
</script>

<style scoped>
  .icon-link {
    height: 32px;
  }
  .icon-dana {
    height: 28px;
  }
  .icon-gopay {
    height: 18px;
  }
  .icon-ovo {
    height: 20px;
  }
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
  .icon-link {
    height: 32px;
  }
  .icon-dana {
    height: 28px;
  }
  .icon-gopay {
    height: 18px;
  }
  .icon-ovo {
    height: 20px;
  }
}
</style>
