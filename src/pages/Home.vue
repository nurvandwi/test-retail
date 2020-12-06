<template>
  <div>
    <Header
      :contentFor="'home'"
      :outlet_name="OutletData.outlet_name"
      :outlet_point="points.Poin_text"
      :outlet_rebate="OutletData.Rebate_text"
    />
    <PromoBanner :slider="Slider" :icon="OutletData.icon" />
    <ListPromosi :contentFor="'home'" :status="OutletData.status_registrasi" />
    <ListTransaksi class="mb-5 pb-5" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Main-Component/Header.vue'
import PromoBanner from '../components/Main-Component/PromoBanner.vue'
import ListTransaksi from '../components/Main-Component/ListTransaksi'
import ListPromosi from '../components/Main-Component/ListPromosi.vue'

export default {
  components: {
    Header,
    PromoBanner,
    ListPromosi,
    ListTransaksi
  },
  data () {
    return {
      OutletData: {
        data: []
      },
      AllTransaction: {
        data: []
      },
      Slider: {
        data: []
      }
    }
  },
  mounted () {
    this.getOutlet()
    this.getAllTransaction()
    this.getSlider()
    this.$store.dispatch('getPoin', {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    })
  },
  methods: {
    getSlider () {
      axios

        .get(`${process.env.VUE_APP_URL}banner`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.Slider = res.data))
        .catch(err => console.log(err))
    },
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
    getAllTransaction () {
      axios
        .get(`${process.env.VUE_APP_URL}view_transaksi`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => (this.AllTransaction = res.data))
        .catch(err => console.log(err))
    }
  },
  computed: {
    points () {
      return this.$store.state.points
    }
  }
}
</script>

<style></style>
