<template>
  <div class="m-0 p-0">
    <div class="" v-if="contentFor === 'product'" style="margin-bottom: 6.5rem">
      <h5
        class="font16px margin-wrapper px-2  space-card mb-1 font-weight-bold"
      >
        Produk Reward
      </h5>

      <p class="px-2 mb-1  font14">Pilih Produk Dibawah ini</p>
      <div class="content mb-3">
        <table class="table px-0  mx-0 mb-0">
          <thead>
            <tr>
              <th scope="col px-0" v-for="item in Kategori.data" :key="item.id">
                <button
                  @click="selected = item.nama_produk"
                  type="button"
                  style="width: auto"
                  class="btn font-custom rounded-pill px-0 font-weight-bolder btn-menu"
                >
                  <h5
                    class="font14 mb-0 font-weight-bold px-3 py-1 "
                    style="white-space: nowrap;"
                  >
                    {{ item.nama_produk }}
                  </h5>
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="product in selectedTab"
          :key="product.id"
          :product="product"
          :contentFor="'product'"
          :status="OutletData.status_registrasi"
        />
      </div>
    </div>
    <div
      class="d-flex align-items-stretch mt-5 margin-wrapper pb-5 space-card flex-wrap top-card"
      v-if="contentFor === 'ewallet'"
      style="margin-bottom: 6.5rem"
    >
      <ItemProduct
        v-for="ewallet in ewallets"
        :key="ewallet.id"
        :ewallet="ewallet"
        :contentFor="'ewallet'"
      />
    </div>
    <div
      class=""
      v-if="contentFor === 'PoinCash'"
      style="margin-bottom: 6.5rem"
    >
      <h5
        class="font16px margin-wrapper px-2  space-card mb-1 font-weight-bold"
      >
        Poin Cash
      </h5>
      <p class="px-2 mb-3 font14">Pilih nominal poin2cash dibawah ini.</p>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="Itempoincash in poincashs"
          :key="Itempoincash.id"
          :poincash="Itempoincash"
          :contentFor="'PoinCash'"
          :status="OutletData.status_registrasi"
        />
      </div>
    </div>
    <div v-if="contentFor === 'Rebate'" style="margin-bottom: 6.5rem">
      <h5
        class="font16px margin-wrapper px-2  space-card mb-1 font-weight-bold"
      >
        Rebate Reward
      </h5>
      <p class="px-2 mb-3 font14">
        Pilih bulan atau quarter rebate dibawah ini.
      </p>
      <div class="d-flex align-items-stretch   flex-wrap top-card">
        <ItemProduct
          v-for="rebate in rebates"
          :key="rebate.id"
          :rebate="rebate"
          :contentFor="'Rebate'"
          :status="OutletData.status_registrasi"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemProduct from './ItemProduct.vue'
import axios from 'axios'

export default {
  props: ['contentFor'],
  components: {
    ItemProduct
  },
  data () {
    return {
      OutletData: {
        data: []
      },
      selected: 'SEMUA',
      Kategori: {}
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    ewallets () {
      return this.$store.state.ewallets
    },
    poincashs () {
      return this.$store.state.poincashs
    },
    rebates () {
      return this.$store.state.rebates
    },
    points () {
      return this.$store.state.points
    },
    selectedTab () {
      console.log(this.selected)
      if (this.selected == 'SEMUA') {
        return this.products
      } else {
        return this.products.filter(x => x.category === this.selected)
      }
    }
  },
  methods: {
    getOutlet () {
      axios
        .get(`${process.env.VUE_APP_URL}status-poin-rebate`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.OutletData = res.data.data))
        .catch(err => console.log(err))
    },
    getKategori () {
      axios
        .get(`${process.env.VUE_APP_URL}jenis-produk`, {
          params: {
            token: localStorage.token
          }
        })
        .then(res => (this.Kategori = res.data))
        .catch(err => console.log(err))
    }
  },
  mounted () {
    this.$store.dispatch('getProducts', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
    this.getKategori()
    this.$store.dispatch('getEwallets')
    this.$store.dispatch('getPoinCashs', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
    this.$store.dispatch('getPoin', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
    this.$store.dispatch('getRebates', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
    this.getOutlet()
  }
}
</script>

<style scoped>
table td,
.table th {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
  padding-right: 0.3rem !important;
  padding-left: 0.3rem !important;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.imagecustom {
  width: 15%;
}

.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}

.btn-menu {
  color: #212529;
  background-color: #f1f5ff;
}

.btn:hover {
  background-color: #4e37b2;
  border-color: #4e37b2;
  color: white;
}

.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(75, 55, 178, 0.2);
}

.table thead th {
  vertical-align: bottom;
  border-bottom: none;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: none;
}

.content {
  /* This is the magic bit for Firefox */
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 100%;
}

.content::-webkit-scrollbar {
  /* This is the magic bit for WebKit */
  display: flex;
}

.mb-card {
  margin-bottom: 10rem;
}

.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
}

.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}

.card {
  border: none !important;
}

.marginTitle {
  margin-top: 4rem;
}

.text-violet {
  color: #4e37b2;
}

.text-violet:hover {
  color: #4e37b2;
  text-decoration: underline;
}

.margin-wrapper {
  margin-bottom: 0rem !important;
}

.space-card {
  padding-top: 3.5rem;
}

@media screen and (max-width: 1000px) {
  .margin-wrapper {
    margin-bottom: 0rem !important;
  }

  .space-card {
    padding-top: 1.5rem;
  }

  .font18 {
    font-size: 18px;
  }

  .font16px {
    font-size: 16px;
  }

  .content {
    /* This is the magic bit for Firefox */
    overflow-x: scroll;
    scrollbar-width: none;
    max-width: 95%;
  }

  .content::-webkit-scrollbar {
    /* This is the magic bit for WebKit */
    display: none;
  }

  .imagecustom {
    width: 17%;
  }

  .size-delete {
    width: 40%;
  }

  .padding-card {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  .size-icon {
    width: 2.5rem;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .margin-wrapper {
    margin-bottom: 0rem !important;
  }

  .space-card {
    padding-top: 3rem;
  }

  .font18 {
    font-size: 18px;
  }

  .font16px {
    font-size: 160px;
  }

  .content {
    /* This is the magic bit for Firefox */
    overflow-x: scroll;
    scrollbar-width: none;
    max-width: 95%;
  }

  .content::-webkit-scrollbar {
    /* This is the magic bit for WebKit */
    display: none;
  }

  .imagecustom {
    width: 17%;
  }

  .size-delete {
    width: 40%;
  }

  .padding-card {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  .size-icon {
    width: 2.5rem;
  }
}
</style>
