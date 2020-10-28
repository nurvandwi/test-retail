<template>
    <div class="col-md-12 col-12 p-0">
        <div v-if="contentFor === 'OrderDetails'">
            <div
                    class="card  mb-3 shadow1 radius"
                    v-for="item in cart"
                    :key="item.product.id"
            >
                <div class="row no-gutters bg">
                    <div class="col-md-2 col-3 px-2 align-self-center  ">
                        <img :src="item.product.img" class="w-75 m-auto "/>
                    </div>
                    <div class="col-md-8 col-6 ">
                        <div class="card-body padding-card px-1">
                            <h5 class="card-title font-weight-bold font14">
                                {{ item.product.nama_produk }}
                            </h5>
                            <h5 class="card-text font14px">
                                {{ item.quantity }} x {{ item.product.poin }} poin
                            </h5>
                        </div>
                    </div>
                    <div class="col-md-2  col-2 align-self-center pl-5">
                        <a @click.prevent="removeProductFromCart(item.product)"
                        ><img src="../../assets/icon-delete.png" class=" size-delete"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentFor === 'PulsaDetails'">
            <div class="card mt-3 shadow1 radius" v-for="item in cartPulsa"
                 :key="item.id">
                <div class="row no-gutters bg">
                    <div class="col-md-3 col-4 px-2 align-self-center  ">
                        <img src="../../assets/xl.png" class="w-50 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0817'||item.no_hp.slice(0, 4) === '0818'||item.no_hp.slice(0, 4) === '0819'||item.no_hp.slice(0, 4) === '0859'||item.no_hp.slice(0, 4) === '0877'||item.no_hp.slice(0, 4) === '0878'||item.no_hp.slice(0, 4) === '0879'"/>

                        <img src="../../assets/indosat.png" class="w-75 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0814'||item.no_hp.slice(0, 4) === '0815'||item.no_hp.slice(0, 4) === '0816'||item.no_hp.slice(0, 4) === '0855'||item.no_hp.slice(0, 4) === '0856'||item.no_hp.slice(0, 4) === '0857'||item.no_hp.slice(0, 4) === '0858'"/>


                        <img src="../../assets/icon-simpati.png" class="w-100 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0811'||item.no_hp.slice(0, 4) === '0812'||item.no_hp.slice(0, 4) === '0813'||item.no_hp.slice(0, 4) === '0821'||item.no_hp.slice(0, 4) === '0822'||item.no_hp.slice(0, 4) === '0823'||item.no_hp.slice(0, 4) === '0851'||item.no_hp.slice(0, 4) === '0852'||item.no_hp.slice(0, 4) === '0853'"/>

                        <img src="../../assets/icon-axis.png" class="w-75 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0831'||item.no_hp.slice(0, 4) === '0832'||item.no_hp.slice(0, 4) === '0838'"/>

                        <img src="../../assets/icon-smartfren.png" class="w-100 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0881'||item.no_hp.slice(0, 4) === '0882'||item.no_hp.slice(0, 4) === '0883'||item.no_hp.slice(0, 4) === '0884'||item.no_hp.slice(0, 4) === '0885'||item.no_hp.slice(0, 4) === '0886'||item.no_hp.slice(0, 4) === '0887'||item.no_hp.slice(0, 4) === '0888'||item.no_hp.slice(0, 4) === '0889'"/>


                        <img src="../../assets/icon-3.png" class="w-50 m-auto d-flex"
                             v-if="item.no_hp.slice(0, 4) === '0895'||item.no_hp.slice(0, 4) === '0896'||item.no_hp.slice(0, 4) === '0897'||item.no_hp.slice(0, 4) === '0898'||item.no_hp.slice(0, 4) === '0899'"/>


                    </div>
                    <div class="col-md-6 col-6">
                        <div class="card-body padding-card px-0">
                            <h4 class="card-title font-weight-bold font14">
                                {{ item.no_hp }}
                            </h4>
                            <h5 class="card-text font14px">1 x {{ item.poin_text }} poin</h5>
                        </div>
                    </div>
                    <div class="col-md-2  col-2 align-self-center pl-2">
                        <a @click.prevent="removePulsaFromCart(item.no_hp)"
                        ><img src="../../assets/icon-delete.png" class=" size-delete"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentFor === 'PointCashDetails'">
            <div
                    class="card mt-2 mb-3 shadow1 radius"
                    v-for="Poincash in cartPoinCash"
                    :key="Poincash.id"
            >
                <div class="row no-gutters bg">
                    <div class="col-md-2 col-3 px-2 align-self-center  ">
                        <img :src="Poincash.poincash.img" class="w-60 m-auto "/>
                    </div>
                    <div class="col-md-8 col-6 ">
                        <div class="card-body padding-card px-1">
                            <h5 class="card-title font-weight-bold font14">
                                {{ Poincash.poincash.nama_produk }}
                            </h5>
                            <h5 class="card-text font14px">
                                {{ Poincash.quantity }} x {{ Poincash.poincash.poin }} poin
                            </h5>
                        </div>
                    </div>
                    <div class="col-md-2  col-2 align-self-center pl-5">
                        <a @click.prevent="removePoincashFromCart(Poincash.poincash)"
                        ><img src="../../assets/icon-delete.png" class=" size-delete"
                        /></a>
                    </div>
                </div>
            </div>

        </div>
        <div v-if="contentFor === 'RebateDetails'">


            <div
                    class="card mt-2 mb-3 shadow1 radius"
                    v-for="rebate in cartRebates"
                    :key="rebate.id"
            >
                <div class="row no-gutters bg">
                    <div class="col-md-2 col-3 px-2 align-self-center  ">
                        <img :src="rebate.rebate.img" class="w-60 m-auto "/>
                    </div>
                    <div class="col-md-8 col-6 ">
                        <div class="card-body padding-card px-1">
                            <h5 class="card-title font-weight-bold font14">
                                {{ rebate.rebate.periode }}
                            </h5>
                            <h5 class="card-text font14px">
                                {{ rebate.quantity }} x {{ rebate.rebate.rebate_value }} poin
                            </h5>
                        </div>
                    </div>
                    <div class="col-md-2  col-2 align-self-center pl-5">
                        <a @click.prevent="removeRebateFromCart(rebate.rebate)"
                        ><img src="../../assets/icon-delete.png" class=" size-delete"
                        /></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentFor === 'EwalletDetails'">
            <div class="card mt-3 mb-3 shadow1 radius" v-for="item in cartEwallet" :key="item.id">
                <div class="row no-gutters bg">

                    <div class="col-md-2 col-3 px-2 align-self-center  " v-if="item.ewallet == 'DANA'">
                        <img src="../../assets/icon-dana.png" class="w-100 m-auto d-flex"/>
                    </div>
                    <div class="col-md-2 col-3 px-2 align-self-center  " v-if="item.ewallet == 'LINK'">
                        <img src="../../assets/Link-Aja.png" class="w-100 m-auto d-flex"/>
                    </div>
                    <div class="col-md-2 col-3 px-2 align-self-center  " v-if="item.ewallet == 'OVO'">
                        <img src="../../assets/icon-ovo.png" class="w-100 m-auto d-flex"/>
                    </div>
                    <div class="col-md-2 col-3 px-2 align-self-center  " v-if="item.ewallet == 'GOPAY'">
                        <img src="../../assets/gopay.png" class="w-100 m-auto d-flex"/>
                    </div>
                    <div class="col-md-5 col-6 ">
                        <div class="card-body padding-card">
                            <h4 class="card-title font-weight-bold font14">{{item.ewallet}} ({{item.nominal}})</h4>
                            <h5 class="card-text font14px">1 x {{item.poin}} poin</h5>
                        </div>
                    </div>
                    <div class="col-md-2  col-2 align-self-center pl-5">
                        <a @click.prevent="removeEwalletFromCart(item.no_hp)"
                        ><img src="../../assets/icon-delete.png" class=" size-delete"
                        /></a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="contentFor === 'ListTransaksi'" class="col-12 col-md-12 mt-0">
            <div
                    class="col-12 col-md-12 mx-0 mt-custom rounded-custom px-0 shadow-item"
                    style="background-color: white"
                    v-for="(all,index) in alltransaction"
                    :key="index"
            >
                <router-link
                        v-bind:to="
            '/TransactionDetails/' +
              `${$route.params.outlet_id}/` +
              alltransaction[index].kode_transaksi
          "
                >
                    <div
                            class="  text-left  d-flex flex-row align-items-center my-3 py-0  pl-3 pr-0"
                    >
                        <img class="imagecustom pr-2" :src="all.img" alt/>
                        <div class="align-items-center col-md-10 col-10 pl-3">
                            <h5 class="font12px caption4 p-0 font-weight-bold m-0 text-dark">
                                {{ all.nama_produk }}
                            </h5>
                            <div class="d-flex justify-content-between pt-2 pb-0">
                                <div class="d-flex align-items-center"><p class="text-dark card-text font11 ">
                                    {{ all.tanggal_transaksi }}
                                </p></div>
                                <div class="d-flex align-items-center pr-0"><p
                                        :class="{
                  'text-center font10 py-1 m-0 px-3 text-white rounded-pill badge bg-warning float-right':
                    all.status === 'Proses',
                  'text-center font10 py-1 m-0 px-3 text-white rounded-pill badge bg-success float-right':
                    all.status === 'Sukses',
                  'text-center font10 py-1 m-0 px-3 text-white rounded-pill badge bg-otorisasi float-right':
                    all.status === 'Otorisasi'
                }"
                                >
                                    {{ all.status }}
                                </p></div>
                            </div>
                        </div>

                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["contentFor", "alltransaction"],
        computed: {
            cart() {
                return this.$store.state.cart;
            },
            cartPulsa() {
                return this.$store.state.cartPulsa;
            },
            cartEwallet() {
                return this.$store.state.cartEwallet;
            },
            cartRebates() {
                return this.$store.state.cartRebate;
            },
            cartPoinCash() {
                return this.$store.state.cartPoincash;
            },
            cartItemCount() {
                return this.$store.getters.cartItemCount;
            },
            cartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            removeProductFromCart(product) {
                this.$store.dispatch("removeProductFromCart", product);
            },
            removeRebateFromCart(rebate) {
                this.$store.dispatch("removeRebateFromCart", rebate);
            },
            removePoincashFromCart(poincash) {
                this.$store.dispatch("removePoincashFromCart", poincash);
            },
            removePulsaFromCart() {
                this.$store.dispatch("removePulsaFromCart");
            },
            removeEwalletFromCart() {
                this.$store.dispatch("removeEwalletFromCart");
            }
        }
    };
</script>

<style scoped>
    .w-60 {
        width: 60%;
    }

    .imagecustom {
        width: 10%;
    }

    .mt-custom {
        margin-top: .7rem !important;
    }

    .shadow1 {
        box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
    }

    .rounded-custom {
        border-radius: 15px;
    }

    .br {
        border-radius: 15px;
    }

    .iconcustom {
        background-size: cover;
        height: 15px;
    }

    .color-card {
        background-color: #f1f5ff;
    }

    .shadow-item {
        /*box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;*/
        border: 0.7px solid #dedede;
    }

    .size-image {
        max-width: 50%;
    }

    .card {
        border: none !important;
    }

    .bg-success {
        background-color: #40c351 !important;
    }

    .bg-otorisasi {
        background-color: #4b93ff;
    }

    .bg-process {
        background-color: #ffc14b;
    }

    .mw {
        max-width: 540px;
    }

    .shadow1 {
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.03));
    }

    .bg {
        background-color: #ffffff;
    }

    .hw26 {
        width: 50%;
    }

    .icon-delete {
        width: 15%;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        .imagecustom {
            width: 14%;
        }

        .size-delete {
            max-width: 20vw;
            height: 5vh;
        }

        .padding-card {
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        }

        .size-image {
            max-width: 50%;
        }

        .icon-delete {
            width: 60%;
        }

        .hw26 {
            width: 65%;
        }

        .pading-custom {
            padding: 1px;
            padding-left: 20px;
        }

        .font10 {
            font-size: 10px;
        }

        .font14 {
            font-size: 14px;
        }

        .font12px {
            font-size: 12px !important;
        }

        .font14px {
            font-size: 14px;
        }

        .font11 {
            font-size: 11px;
        }

        .font13 {
            font-size: 13px;
        }
    }
</style>
