<template>
    <div class="container">
        <nav
                v-if="$route.name != 'categories' && $route.name != 'ewallet'"
                class="navbar-Container mx-auto mb-2 margin-desktop navbar navbar-expand navbar-dark backtheme footerstyle col-md-8 col-10 col-sm-10 col-lg-5"
        >
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'product'"
            >
                <router-link
                        v-bind:to="'/productdetail/' + `${$route.params.outlet_id}`"
                >
                    <div class="nav navbar-nav">
                        <div class="d-flex align-items-center">
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16 border-right">
                                    {{ cartItemCount }} Items
                                </h5>
                            </div>
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16">{{ cartTotalPrice }} Poin</h5>
                            </div>

                            <div class="col-md-2 col-2">
                                <img
                                        src="../../assets/icon-cart.png"
                                        class="mr-5 img-cart"
                                        alt
                                />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'ewallet'"
            >
                <router-link v-bind:to="'/ewallet'">
                    <div class="nav navbar-nav">
                        <div class="d-flex align-items-center">
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16 border-right">
                                    {{ cartEwalletCount }} Items
                                </h5>
                            </div>
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16">
                                    {{ cartEwalletPrice }} Poin
                                </h5>
                            </div>

                            <div class="col-md-2 col-2">
                                <img
                                        src="../../assets/icon-cart.png"
                                        class="mr-5 img-cart"
                                        alt
                                />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'PoinCash'"
            >
                <router-link v-bind:to="'/pointcashdetails/' + `${$route.params.outlet_id}`">
                    <div class="nav navbar-nav">
                        <div class="d-flex align-items-center">
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16 border-right">
                                    {{ cartPoincashCount }} Items
                                </h5>
                            </div>
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16">
                                    {{ cartPoincashPrice }} Poin
                                </h5>
                            </div>

                            <div class="col-md-2 col-2">
                                <img
                                        src="../../assets/icon-cart.png"
                                        class="mr-5 img-cart"
                                        alt
                                />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'Rebate'"
            >
                <router-link
                        v-bind:to="'/rebatedetails/' + `${$route.params.outlet_id}`"
                >
                    <div class="nav navbar-nav">
                        <div class="d-flex align-items-center">
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16 border-right">
                                    {{ cartRebateCount }} Items
                                </h5>
                            </div>
                            <div class="col-md-5 col-5">
                                <h5 class="text-white m-0 font16">
                                    {{ cartRebatePrice }} Poin
                                </h5>
                            </div>

                            <div class="col-md-2 col-2">
                                <img
                                        src="../../assets/icon-cart.png"
                                        class="mr-5 img-cart"
                                        alt
                                />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'RebateDetails'"
            >
                <button class="btn py-0" @click="checkOutRebateFromCart()">
                    <router-link
                            v-bind:to="'/SuccessPage/' + `${$route.params.outlet_id}`"
                            style="color: #FFF;"
                            class="mx-auto font18"
                    >
                        <div class="nav navbar-nav">
                            <div class="d-flex align-items-center">
                                <div class="col-md-10 col-10">
                                    <h5 class="text-white m-0 font16">Checkout</h5>
                                </div>
                                <div class="col-md-2 col-2">
                                    <img
                                            src="../../assets/icon-next.png"
                                            class="mr-5 img-cart"
                                            alt
                                    />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </button>
            </div>
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'EwalletDetails'"
            >
                <button class="btn py-0" @click="checkOutEwalletFromCart()">
                    <router-link
                            v-bind:to="'/SuccessPage/' + `${$route.params.outlet_id}`"
                            style="color: #FFF;"
                            class="mx-auto font18"
                    >
                        <div class="nav navbar-nav">
                            <div class="d-flex align-items-center">
                                <div class="col-md-10 col-10">
                                    <h5 class="text-white m-0 font16">Checkout</h5>
                                </div>
                                <div class="col-md-2 col-2">
                                    <img
                                            src="../../assets/icon-next.png"
                                            class="mr-5 img-cart"
                                            alt
                                    />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </button>
            </div>
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'PointCashDetails'"
            >
                <button class="btn py-0" @click="checkOutPoinCashFromCart()">
                    <router-link
                            v-bind:to="'/SuccessPage/' + `${$route.params.outlet_id}`"
                            style="color: #FFF;"
                            class="mx-auto font18"
                    >
                        <div class="nav navbar-nav">
                            <div class="d-flex align-items-center">
                                <div class="col-md-10 col-10">
                                    <h5 class="text-white m-0 font16">Checkout</h5>
                                </div>ss
                                <div class="col-md-2 col-2">
                                    <img
                                            src="../../assets/icon-next.png"
                                            class="mr-5 img-cart"
                                            alt
                                    />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </button>
            </div>
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'ProductDetails'"
            >
                <button class="btn py-0" @click="checkOutFromCart()">
                    <router-link
                            v-bind:to="'/SuccessPage/' + `${$route.params.outlet_id}`"
                            style="color: #FFF;"
                            class="mx-auto font18"
                    >
                        <div class="nav navbar-nav">
                            <div class="d-flex align-items-center">
                                <div class="col-md-10 col-10">
                                    <h5 class="text-white m-0 font18">Checkout</h5>
                                </div>
                                <div class="col-md-2 col-2">
                                    <img
                                            src="../../assets/icon-next.png"
                                            class="mr-5 img-cart"
                                            alt
                                    />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </button>
            </div>
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'PulsaDetails'"
            >
                <button class="btn py-0" @click="checkOutPulsaFromCart()">
                    <router-link
                            v-bind:to="'/SuccessPage/' + `${$route.params.outlet_id}`"
                            style="color: #FFF;"
                            class="mx-auto font18"
                    >
                        <div class="nav navbar-nav">
                            <div class="d-flex align-items-center">
                                <div class="col-md-10 col-10">
                                    <h5 class="text-white m-0 font16">Checkout</h5>
                                </div>
                                <div class="col-md-2 col-2">
                                    <img
                                            src="../../assets/icon-next.png"
                                            class="mr-5 img-cart"
                                            alt
                                    />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </button>
            </div>
            <div
                    class="container justify-content-center py-2"
                    v-if="contentFor === 'Success'"
            >
                <router-link
                        v-bind:to="'/Categories/' + `${$route.params.outlet_id}`"
                        style="color: #FFF;"
                        class="mx-auto font18"
                >
                    <div class="nav navbar-nav">
                        <div class="d-flex align-items-center">
                            <div class="col-md-12 col-12">
                                <h5 class="text-white m-0">Home</h5>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        props: ["contentFor"],
        methods: {
            checkOutFromCart() {
                // console.log(this.$route.params.outlet_id);
                this.$store.dispatch("checkOutCart", {
                    outlet_id: this.$route.params.outlet_id,
                    token: localStorage.token
                });
            },
            checkOutRebateFromCart() {
                // console.log(this.$route.params.outlet_id);
                this.$store.dispatch("checkOutRebate", {
                    outlet_id: this.$route.params.outlet_id,
                    token: localStorage.token
                });
            },
            checkOutPoinCashFromCart() {
                // console.log(this.$route.params.outlet_id);
                this.$store.dispatch("checkOutPoinCash", {
                    outlet_id: this.$route.params.outlet_id,
                    token: localStorage.token
                });
            },
            checkOutPulsaFromCart() {
                // console.log(this.$route.params.outlet_id);
                this.$store.dispatch("checkOutPulsa", {
                    outlet_id: this.$route.params.outlet_id,
                    token: localStorage.token
                });
            },
            checkOutEwalletFromCart() {
                // console.log(this.$route.params.outlet_id);
                this.$store.dispatch("checkOutEwallet", {
                    outlet_id: this.$route.params.outlet_id,
                    token: localStorage.token
                });
            }
        },
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
            },
            cartEwalletCount() {
                return this.$store.getters.cartEwalletCount;
            },
            cartEwalletPrice() {
                return this.$store.getters.cartEwalletPrice;
            },
            cartPoincashCount() {
                return this.$store.getters.cartPoincashCount;
            },
            cartRebateCount() {
                return this.$store.getters.cartRebateCount;
            },
            cartPoincashPrice() {
                return this.$store.getters.cartPoincashPrice;
            },
            cartRebatePrice() {
                return this.$store.getters.cartRebatePrice;
            },

        }
    };
</script>

<style scoped>
    .backtheme {
        background: #4e37b2;
        border-radius: 100px;
    }

    .footerstyle {
        position: fixed !important;
        bottom: 0 !important;
        left: 0;
        right: 0;
        max-width: auto;
        z-index: 1030 !important;
    }

    @media screen and (max-width: 1000px) {
        .backtheme {
            background: #4e37b2;
            border-radius: 100px;
        }

        .img-cart {
            width: 30px;
            height: 30px;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
            .footerstyle {
                position: fixed !important;
                bottom: 0 !important;
                left: 0;
                right: 0;
                min-height: 70px;
                max-width: 100vw;
                z-index: 1030 !important;
            }

            .font16 {
                font-size: 16px !important;
            }

            .font18 {
                font-size: 18px !important;
            }
        }
    }
</style>
