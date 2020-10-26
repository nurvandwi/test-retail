<template>
    <div class="container mt-4" data-aos="fade-up">
        <h3 class="font18 m-0" style="font-weight:bolder;">Input Data</h3>

        <p class="font14">Masukkan nomor handphone untuk di Top Up</p>
        <div class="d-flex align-items-center"></div>

        <form>
            <div class="form-row mt-3">
                <div class="col-8 col-md-8">
                    <input
                            v-model="no_hp"
                            type="number"
                            class="form-control"
                            placeholder="Nomor Pulsa"
                    />
                </div>
                <div class="col-md-4 col-4 d-flex align-items-center">
                    <div v-if="no_hp.slice(0, 4) === '0877'">
                        <img src="../../assets/xl.png" class="icon-pulsa pl-2" alt="..."/>
                    </div>
                    <div v-else-if="no_hp.slice(0, 4) === '0856'">
                        <img
                                src="../../assets/indosat.png"
                                class="icon-pulsa pl-2"
                                alt="..."
                        />
                    </div>
                    <div v-else></div>
                </div>
                <div class="col-md-12 mt-3" v-if="no_hp.slice(0, 4) === '0877'">
                    <div class="row px-2 pt-2">
                        <div class="col-md-6 col-6 px-2 pb-3">
                            <div class="card border w-100">
                                <div class="card-body p-3">
                                    <h5 class="card-title text-center m-0">5.000</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-6 px-2 pb-3">
                            <button class="btn py-0 col-12 col-md-12 px-0" @click="addToPulsa()">
                                <router-link
                                        v-bind:to="'/pulsadetails/' + `${$route.params.outlet_id}`+ '/10000/'  "
                                        style="color: #FFF;"
                                        class="mx-auto font18 text-dark"
                                >
                                    <div class="card border w-100">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center m-0">10.000</h5>
                                        </div>
                                    </div>
                                </router-link>
                            </button>
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
                            <div class="card border w-100">
                                <div class="card-body p-3">
                                    <h5 class="card-title text-center m-0">100000</h5>
                                </div>
                            </div>
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
                <div class="col-md-12 mt-3" v-if="no_hp.slice(0, 4) === '0856'">
                    <div class="row px-2 pt-2">
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
                no_hp: [],
                nominal: [],
                selected: "Pulsa",
                options: [
                    {text: "Pilih Jenis Provider", value: "Pulsa"},
                    {text: "Indosat", value: "Indosat"},
                    {text: "Xl", value: "Xl"}
                ]
            };
        },
        methods: {
            addToPulsa() {
              // console.log(this.no_hp)
                this.$store.dispatch("addPulsaToCart", {
                    no_hp: this.no_hp,
                    nominal: this.$route.params.nominal
                });
            }

        }
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

    .icon-pulsa {
        height: 35px;
    }

    @media screen and (max-width: 1000px) {
        .icon-provider {
            width: 50px;
        }

        .icon-pulsa {
            height: 35x;
        }

        .font22 {
            font-size: 22px;
        }

        .font18 {
            font-size: 18px;
        }
    }
</style>
