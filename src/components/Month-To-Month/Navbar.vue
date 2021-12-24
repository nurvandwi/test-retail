<template>
  <div>
    <div class="mb-custom">
      <section class="bg-section custom-position row justify-content-center">
        <div class="col-12 col-md-12 my-3">
          <h3
            class="font14 text-top text-white font-weight-bolder text-center mb-0"
          >
            {{ kode_outlet }}
          </h3>

          <p class="font22 m-0 text-white text-center">{{ title }}</p>
        </div>
      </section>
      <section>
        <div class="box-position text-center mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="row col-md-10 col-10 table-bordered bg-orage border-radius"
            >
              <div class="col py-1 col-md-6 border-right">
                <div>
                  <h2 class="font11 m-0 text-white font-weight-bold pt-1">
                    SISA POIN
                  </h2>
                </div>
              </div>
              <div class="col-6 py-1 col-md-6 m-0 p-0">
                <div>
                  <p class="font-weight-bold font16 text-warning m-0">
                    10000000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row p-0 d-flex justify-content-between">
            <div class="content my-2 mx-auto">
              <table class="table mb-1 mx-0">
                <thead>
                  <tr class="d-flex justify-content-center">
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">January</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">February</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Maret</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">April</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Mei</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Juni</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">July</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Agustus</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">September</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Oktober</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">November</h3>
                      </button>
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-border">
                        <h3 class="font12 px-2 mb-0">Desember</h3>
                      </button>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "kode_outlet"],
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>

<style scoped>
.content {
  overflow-x: scroll;
  scrollbar-width: none;
  width: 80%;
}
.content::-webkit-scrollbar {
  display: none;
}

.btn-light:hover {
  background-color: #ffcc00;
}

.table th {
  border: none;
}

.table-bordered {
  border-color: #6a813d;
  border-radius: 40px 40px 40px 40px;
}

.mb-custom {
  margin-bottom: 5rem;
}

.bg-section {
  min-height: 10vh;
  height: 15vh;
  background-color: #41009a;
}

.bg-orage {
  background: #ff4814;
}

.btn-border {
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background: #fff;
}

.box-position {
  top: 11vh;
  left: 0;
  right: 0;
  z-index: 1030;
  margin-top: -4vh;
}

.border-radius {
  border-radius: 20px, 20px, 20px, 20px;
}

/* fonts */

.font11 {
  font-size: 11px;
}

.font14 {
  font-size: 14px;
}

.font12 {
  font-size: 12px;
}

.font22 {
  font-size: 22px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .mb-custom {
    margin-bottom: 13rem;
  }

  .custom-position {
    min-height: 16vh;
    background-color: #41009a;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030 !important;
  }

  .margin-top-custom {
    margin-top: -160px;
  }

  .box-position {
    position: fixed;
    top: 17vh;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030;
  }

  .font20 {
    font-size: 20px;
  }
  .font16 {
    font-size: 16px;
  }
}
</style>
