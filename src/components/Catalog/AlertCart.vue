<template>
  <div class="col-md-12 col-12 p-0 mt-alert">
    <div class="card mb-3 shadow1" v-if="contentFor === 'OrderDetails'">
      <div class="row no-gutters bg radius">
        <div class="col-md-4 col-4 align-self-center pl-5">
          <img src="../../assets/icon-cart v-2.png" class="hw26" />
        </div>
        <div class="col-md-8 col-8">
          <div class="card-body py-2 ">
            <h3 class="card-title font14 mb-1">Total Penukaran Poin</h3>
            <h4 class="card-text font14 font-weight-bold">
              {{ cartTotalPrice }} Poin
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 shadow1" v-if="contentFor === 'PulsaDetails'">
      <div class="row no-gutters bg radius">
        <div class="col-md-4 col-4 align-self-center pl-5">
          <img src="../../assets/icon-cart v-2.png" class="hw26" />
        </div>
        <div class="col-md-8 col-8">
          <div class="card-body py-2">
            <h1 class="card-title font14 mb-1">Total Penukaran Poin</h1>
            <p class="card-text font14 font-weight-bold">
              {{ plsTotalPrice }} Poin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 shadow1" v-if="contentFor === 'EwalletDetails'">
      <div class="row no-gutters bg radius">
        <div class="col-md-4 col-4 align-self-center pl-5">
          <img src="../../assets/icon-cart v-2.png" class="hw26" />
        </div>
        <div class="col-md-8 col-8">
          <div class="card-body py-2">
            <h1 class="card-title font14 mb-1">Total Penukaran Poin</h1>
            <p
              class="card-text font14 font-weight-bold"
              v-for="item in cartEwallet"
              :key="item.id"
            >
              {{ item.poin }} poin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 shadow1" v-if="contentFor === 'PointCashDetails'">
      <div class="row no-gutters bg radius">
        <div class="col-md-4 col-4 align-self-center pl-5">
          <img src="../../assets/icon-cart v-2.png" class="hw26" />
        </div>
        <div class="col-md-8 col-8">
          <div class="card-body py-2">
            <h3 class="card-title font14 mb-1">Total Penukaran Poin</h3>
            <h4 class="card-text font14 font-weight-bold">
              {{ poincashTotalPrice }} Poin
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 shadow1" v-if="contentFor === 'RebateDetails'">
      <div class="row no-gutters bg radius">
        <div class="col-md-4 col-4 align-self-center pl-5">
          <img src="../../assets/icon-cart v-2.png" class="hw26" />
        </div>
        <div class="col-md-8 col-8">
          <div class="card-body py-2">
            <h3 class="card-title font14 mb-1">Total Penukaran Poin</h3>
            <h4 class="card-text font14 font-weight-bold">
              Rp. {{ rebateTotalPrice }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contentFor"],
  computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    rebateTotalPrice() {
      return this.$store.getters.rebateTotalPrice;
    },
    poincashTotalPrice() {
      return this.$store.getters.poincashTotalPrice;
    },
    plsTotalPrice() {
      return this.$store.getters.plsTotalPrice;
    },
    wltTotalPrice() {
      return this.$store.getters.wltTotalPrice;
    },
    cartEwallet() {
      return this.$store.state.cartEwallet;
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #e8e2ff;
}

.card {
  border: none !important;
}

.shadow1 {
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.03));
}

.hw26 {
  height: 50px;
  width: 50px;
}

.radius {
  border-radius: 7px;
}

.mt-alert {
  margin-top: 6rem;
}

@media screen and (max-width: 1000px) {
  .mt-alert {
    margin-top: 4.5rem !important;
  }

  .hw26 {
    height: 26px;
    width: 26px;
  }

  .font12 {
    font-size: 12px;
    color: #4e37b2;
  }

  .font14 {
    font-size: 14px;
    color: #4e37b2;
  }
}
</style>
