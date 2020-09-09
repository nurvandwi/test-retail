<template>
  <div class="marginTitle container">
    <h3 style="font-weight:bolder;" class="font22">List Category</h3>
    <div class="row mt-4 px-2">
      <div class="col-md-6 col-6 px-1">
        <div class="card text-white">
          <router-link class="text-white" v-bind:to="'/pulsa'">
            <div>
              <img src="../../assets/Banner-Pulsa.png" class="card-img" alt="..." />
            </div>
            <div class="card-img-overlay d-flex">
              <div class="row">
                <div class="col-md-12 col-12 d-flex align-items-center space-content">
                  <div class="align-self-center d-flex flex-column">
                    <h4 class="card-title font-weight-normal font20 pb-1 m-0">Pulsa</h4>
                    <img src="../../assets/pulsa-icon.png" class="card-img size-icon" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-6 col-6 px-1">
        <div class="card text-white">
          <router-link class="text-white" v-bind:to="'/Ewallet'">
            <div>
              <img src="../../assets/Banner-Ewallet.png" class="card-img" alt="..." />
            </div>
            <div class="card-img-overlay d-flex">
              <div class="row">
                <div class="col-md-12 col-12 d-flex align-items-center space-content">
                  <div class="align-self-center d-flex flex-column">
                    <h4 class="card-title font-weight-normal font20 pb-1 m-0">E-wallet</h4>
                    <img src="../../assets/e-wallet-icon.png" class="card-img size-icon" alt="..." />
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
.size-icon {
  width: 5rem;
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