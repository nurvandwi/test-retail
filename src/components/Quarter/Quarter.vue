<template>
    <div>
        <div
                class="container jumbotron jumbotron-fluid pt-0 m-0"
                v-if="contentFor === 'Quarter'"
        >
            <section class="section-stats row justify-content-center">
                <div class="col-12 col-md-12 stats-details mt-3 ">
                    <p
                            class="font22 text-top text-white font-custom font-weight-bolder text-center mb-0"
                    >
                        {{ nama_outlet }}
                    </p>

                    <h2 class="font14 text-white font-custom text-center">
                        {{ id_outlet }}
                    </h2>
                </div>

            </section>
            <section>
                <div
                        class=" d-flex justify-content-center quarterstyle text-center mb-3 btn-month"
                >
                    <div class="row col-md-10 col-10 table-bordered bg-violet round h-53">
                        <div class="col py-1 col-md-6 stats-details border-right">
                            <div>
                                <h2
                                        class="font11 m-0 text-white font-custom font-weight-bold pt-1"
                                >
                                    SISA POIN
                                </h2>
                                <p class="text-blue font16 font-weight-bold m-0">
                                    {{ formatPrice( sisa_point) }}
                                </p>
                            </div>
                        </div>
                        <div class="col-6 py-1 col-md-6 m-0 p-0 stats-details">
                            <div>
                                <h2
                                        class="font11 m-0 font-custom text-white pt-1 font-weight-bold"
                                >
                                    SALDO REBATE
                                </h2>
                                <p class="font-weight-bold font16 text-blue m-0">
                                    {{ formatRebate( saldo_rebate) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div
                class="container jumbotron jumbotron-fluid pt-0 m-0"
                v-if="contentFor === 'MonthToYear'"
        >
            <section class="section-stats row justify-content-center">
                <div class="col-12 col-md-12 stats-details mt-3 ">
                    <p
                            class="font22 text-top text-white font-custom font-weight-bolder text-center mb-0"
                    >
                        {{ nama_outlet }}
                    </p>

                    <h2 class="font14 text-white font-custom text-center">
                        {{ id_outlet }}
                    </h2>
                </div>

            </section>
            <section>
                <div
                        class=" d-flex justify-content-center quarterstyle text-center mb-3 btn-month"
                >
                    <div class="row col-md-10 col-10 table-bordered bg-violet round h-53">
                        <div class="col py-1 col-md-6 stats-details border-right">
                            <div>
                                <h2
                                        class="font11 m-0 text-white font-custom font-weight-bold pt-1"
                                >
                                    SISA POIN
                                </h2>
                                <p class="text-blue font16 font-weight-bold m-0">
                                    {{ formatPrice( sisa_point) }}
                                </p>
                            </div>
                        </div>
                        <div class="col-6 py-1 col-md-6 m-0 p-0 stats-details">
                            <div>
                                <h2
                                        class="font11 m-0 font-custom text-white pt-1 font-weight-bold"
                                >
                                    SALDO REBATE
                                </h2>
                                <p class="font-weight-bold font16 text-blue m-0">
                                    {{ formatRebate( saldo_rebate) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div
                class="container jumbotron jumbotron-fluid pt-0 m-0"
                v-if="contentFor === 'MonthToMonth'"
        >
            <section class="section-statsMonth row justify-content-center">
                <div class="col-12 col-md-12 stats-details mt-3 ">
                    <p
                            class="font22 text-top text-white font-custom font-weight-bolder text-center mb-0"
                    >
                        {{ nama_outlet }}
                    </p>

                    <h2 class="font14 text-white font-custom text-center">
                        {{ id_outlet }}
                    </h2>

                </div>
            </section>
            <section>
                <div
                        class=" quarterstyle text-center mb-3 btn-monthv2"
                >
                    <div class=" d-flex justify-content-center">
                        <div class="row col-md-10 col-10 table-bordered bg-violet round h-53">
                            <div class="col py-1 col-md-6 stats-details border-right">
                                <div>
                                    <h2
                                            class="font11 m-0 text-white font-custom font-weight-bold pt-1"
                                    >
                                        SISA POIN
                                    </h2>
                                    <p class="text-blue font16 font-weight-bold m-0">
                                        {{formatPrice (sisa_point) }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-6 py-1 col-md-6 m-0 p-0 stats-details">
                                <div>
                                    <h2
                                            class="font11 m-0 font-custom text-white pt-1 font-weight-bold"
                                    >
                                        SALDO REBATE
                                    </h2>
                                    <p class="font-weight-bold font16 text-blue m-0">
                                        {{ formatRebate(saldo_rebate) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-2 btn-quarter p-0 d-flex justify-content-between"
                         style="background-color: white">
                        <div class="content mt-4 mx-auto">
                            <table class="table mb-1 mx-0">
                                <thead>
                                <tr>
                                    <th scope="col" v-for="itemBulan in bulan" :key="itemBulan.id">
                                        <router-link
                                                v-bind:to="'/MonthToMonth/' + itemBulan.id + `/${$route.params.outlet_id}`"
                                                type="button"
                                                class="btn font-custom rounded-pill font-weight-bolder btn-light">
                                            <h3 class="font12 mb-0 font-weight-bold">{{itemBulan.nama_bulan}}
                                            </h3>
                                        </router-link>
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
    import axios from "axios";

    export default {
        name: "BoxQuarter",
        props: [
            "nama_outlet",
            "contentFor",
            "id_outlet",
            "sisa_point",
            "saldo_rebate",
            "bulan"
        ], data() {
            return {
                selected: this.$route.params.bulan
            };
        },
        methods: {
            push(id) {
                console.log(id)
                this.$router.push("/");
                return this.selected
            },
            allQuarter() {
                axios
                    .get("https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet", {
                        headers: {
                            version: this.$route.params.version
                        },
                        params: {
                            txtKodeOutlet: this.$route.params.outlet_id,
                            token: localStorage.token
                        }
                    })

                    .then(res => (this.points = res.data))
                    .catch(err => console.log(err));
            },
            monthToYear() {
                axios
                    .get(
                        "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mty",
                        {
                            params: {
                                txtKodeOutlet: this.$route.params.outlet_id,
                                token: localStorage.token
                            }
                        }
                    )

                    .then(res => (this.year = res.data))
                    .catch(err => console.log(err));
            },
            formatPrice(value) {
                const val = (value / 1).toFixed(2).replace(".", ",");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            formatRebate(value) {
                const val = (value / 1).toFixed(0).replace(".", ",");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
            // monthToMonth() {
            //     axios
            //         .get(
            //             "https://www.inosis.co.id/mv_demo_api/api.php/dashboard-outlet-mtm",
            //             {
            //                 headers: {
            //                     version: this.$route.params.bulan
            //                 },
            //                 params: {
            //                     txtKodeOutlet: this.$route.params.outlet_id,
            //                     token: localStorage.token
            //                 }
            //             }
            //         )
            //
            //         .then(res => (this.month = res.data))
            //         .catch(err => console.log(err));
            // }
        },


        computed: {
            btnHover1() {
                return 1 == this.$route.params.bulan;
            },
            btnHover2() {
                console.log(this.selected);
                return 2 == this.$route.params.bulan;
            },
            btnHover3() {
                console.log(this.selected);
                return 3 == this.$route.params.bulan;
            },
            btnHover4() {
                console.log(this.selected);
                return 4 == this.$route.params.bulan;
            },
            btnHover5() {
                console.log(this.selected);
                return 5 == this.$route.params.bulan;
            },
            btnHover6() {
                console.log(this.selected);
                return 6 == this.$route.params.bulan;
            },
            btnHover7() {
                console.log(this.selected);
                return 7 == this.$route.params.bulan;
            },
            btnHover8() {
                console.log(this.selected);
                return 8 == this.$route.params.bulan;
            },
            btnHover9() {
                console.log(this.selected);
                return 9 == this.$route.params.bulan;
            },
            btnHover10() {
                console.log(this.selected);
                return 10 == this.$route.params.bulan;
            },
            btnHover11() {
                console.log(this.selected);
                return 11 == this.$route.params.bulan;
            },
            btnHover12() {
                console.log(this.selected);
                return 12 == this.$route.params.bulan;
            }
        },
        mounted() {
            this.allQuarter();
            this.monthToYear();
            this.monthToMonth();
        },
        watch: {
            $route() {
                9 + this.$route.params.outlet_id + '#9'
                this.allQuarter();
                this.monthToYear();
                this.monthToMonth();
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


    .font11 {
        font-size: 11px;
    }

    .table th {
        border: none !important;
    }


    .font22 {
        font-size: 22px;
    }


    .text-top {
        margin-top: -10px;
    }

    .section-stats {
        background-color: #41009a;
    }

    .btn-month {
        margin-top: -18px;
    }


    .btn-light:hover {
        background-color: #ffcc00;
    }


    .table-bordered {
        border-color: #6a813d !important;
        border-bottom-left-radius: 12px !important;
        border-bottom-right-radius: 12px !important;
    }

    .content {
        overflow-x: scroll;
        scrollbar-width: none;
        max-width: 100%;
    }

    .content::-webkit-scrollbar {
        display: none;
    }

    .h-53 {
        height: 53px;
    }

    .jumbotron {
        background-color: #ffffff !important;
        padding: 0px;
    }


    .p-custom {
        padding-bottom: 38px;
    }

    .round {
        border-radius: 20px;
    }

    .table-bordered {
        border: 1px solid #53448b;
    }


    .font14 {
        font-size: 14px;
    }

    .text-blue {
        color: #ffcc00;
    }

    .font16 {
        font-size: 16px;
    }

    .font11 {
        font-size: 11px;
    }

    .font22 {
        font-size: 22px;
    }


    .text-top {
        margin-top: -10px;
    }

    .bg-violet {
        background: #ff4814;
    }

    .section-stats {
        min-height: 10vh;
        height: 15vh;
        background-color: #41009a;
    }

    .section-statsMonth {
        min-height: 10vh;
        height: 15vh;
        background-color: #41009a;
    }

    .btn-month {
        margin-top: -30px;
    }

    .btn-monthv2 {
        margin-top: -30px;
    }

    .btn-quarter {
        margin-top: -30px;
    }


    .btn-light:hover {
        background-color: #ffcc00;
    }

    .btnStyle {
        background-color: #ffcc00;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        .section-stats {
            min-height: 16vh;
            background-color: #41009a;
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            max-width: auto;
            z-index: 1030 !important;
        }

        .section-statsMonth {
            min-height: 16vh;
            background-color: #41009a;
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            max-width: auto;
            z-index: 1030 !important;
        }

        .btn-monthv2 {
            margin-top: -160px;
        }

        .btn-month {
            margin-top: -155px;
        }

        .quarterstyle {
            position: fixed;
            top: 35vh;
            left: 0;
            right: 0;
            max-width: auto;
            z-index: 1030;
        }
    }
</style>
