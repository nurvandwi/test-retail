<template>
  <div class="marginTitle container">
    <div class="row m-auto py-4">
      <div class="col-md-3 col-3 px-1 d-flex justify-content-center">
        <div class="text-white">
          <router-link class="text-white" v-bind:to="'/TransactionProduct'">
            <div></div>
            <div class=" d-flex">
              <div class="row">
                <div
                  class="col-md-12 col-12 d-flex align-items-center space-content"
                >
                  <div class="align-self-center d-flex flex-column">
                    <h4
                      class="card-title text-violet font-weight-normal font20 pb-1 m-0"
                    >
                      Product
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3 col-3 px-1 d-flex justify-content-center">
        <div class="text-white">
          <router-link class="text-white" v-bind:to="'/TransactionRebate'">
            <div></div>
            <div class="d-flex">
              <div class="row">
                <div
                  class="col-md-12 col-12 d-flex align-items-center space-content"
                >
                  <div class="align-self-center d-flex flex-column">
                    <h4
                      class="card-title text-violet font-weight-normal font20 pb-1 m-0"
                    >
                      Rebate
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3 col-3 px-1 d-flex justify-content-center">
        <div class="text-white">
          <router-link class="text-white" v-bind:to="'/TransactionEwallet'">
            <div></div>
            <div class=" d-flex">
              <div class="row">
                <div
                  class="col-md-12 col-12 d-flex align-items-center space-content"
                >
                  <div class="align-self-center d-flex flex-column">
                    <h4
                      class="card-title text-violet text-black font-weight-normal font20 pb-1 m-0"
                    >
                      E-wallet
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3 col-3 px-1 d-flex justify-content-center">
        <div class="text-white">
          <router-link class="text-white" v-bind:to="'/TransactionPulsa'">
            <div></div>
            <div class="d-flex">
              <div class="row">
                <div
                  class="col-md-12 col-12 d-flex align-items-center space-content"
                >
                  <div class="align-self-center d-flex flex-column">
                    <h4
                      class="card-title text-violet font-weight-normal font20 pb-1 m-0"
                    >
                      Pulsa
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
</template>

<script>
export default {};
</script>

<style scoped>
.marginTitle {
  margin-top: 5rem;
}
.text-violet {
  color: #4e37b2;
}

.text-violet:hover {
  color: #4e37b2;
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .size-icon {
    width: 2.5rem;
  }
  .font20 {
    font-size: 20px;
  }
  .font22 {
    font-size: 22px;
  }
}
</style>
