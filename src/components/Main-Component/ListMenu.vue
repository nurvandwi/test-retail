<template>
  <div class="container mb-5 pb-3">
    <div class="row">
      <div class="col-md-10 col-12 m-auto">
        <div class="row">
          <div
            class="col-md-6 col-6 p-0"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="card text-white">
              <router-link
                class="text-white"
                v-bind:to="'/product/' + `${$route.params.outlet_id}`"
              >
                <div>
                  <img
                    src="../../assets/product.png"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="card-img-overlay d-flex">
                  <div class="row">
                    <div
                      class="col-md-12 col-12 d-flex align-items-center space-content"
                    >
                      <div>
                        <img
                          src="../../assets/icon-product.png"
                          class="card-img size-icon"
                          alt="..."
                        />
                        <h4 class="card-title mt-3 font-weight-bolder font16">
                          Product
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div
            class="col-md-6 col-6 p-0"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="card text-white">
              <router-link class="text-white" v-bind:to="'/rebate/'+ `${$route.params.outlet_id}`">
                <div>
                  <img
                    src="../../assets/rebate.png"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="card-img-overlay d-flex">
                  <div class="row">
                    <div
                      class="col-md-12 col-12 d-flex align-items-center space-content"
                    >
                      <div>
                        <img
                          src="../../assets/icon-rebate.png"
                          class="card-img size-icon"
                          alt="..."
                        />
                        <h4 class="card-title mt-3 font-weight-bolder font16">
                          Rebate
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10 col-12 m-auto">
        <div class="row">
          <div
            class="col-md-6 col-6 p-0"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="card text-white">
              <router-link class="text-white" v-bind:to="'/Ewallet/' + `${$route.params.outlet_id}`">
                <div>
                  <img
                    src="../../assets/e-wallet.png"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="card-img-overlay d-flex">
                  <div class="row">
                    <div
                      class="col-md-12 col-12 d-flex align-items-center space-content"
                    >
                      <div>
                        <img
                          src="../../assets/icon-wallet.png"
                          class="card-img size-icon"
                          alt="..."
                        />
                        <h4 class="card-title mt-3 font-weight-bolder font16">
                          E-Wallet & Pulsa
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div
            class="col-md-6 col-6 p-0"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="card text-white">
              <router-link class="text-white" v-bind:to="'/PoinCash/'+ `${$route.params.outlet_id}`">
                <div>
                  <img src="../../assets/cash.png" class="card-img" alt="..." />
                </div>
                <div class="card-img-overlay d-flex">
                  <div class="row">
                    <div
                      class="col-md-12 col-12 d-flex align-items-center space-content"
                    >
                      <div>
                        <img
                          src="../../assets/icon-cash.png"
                          class="card-img size-icon"
                          alt="..."
                        />
                        <h4 class="card-title mt-3 font-weight-bolder font16">
                          Point to Cash
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: none !important;
}
.space-content {
  padding: 3rem;
}
.size-icon {
  width: 5rem;
}
@media screen and (max-width: 1000px) {
  .space-content {
    padding: 1.2rem;
  }
  .size-icon {
    width: 4rem;
  }
  .font16 {
    font-size: 16px;
  }
}
</style>
