import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog.vue";
import Allproduct from "../pages/Allproduct.vue";
import Product from "../pages/Product.vue";
import Categories from "../pages/Categories.vue";
import Ewallet from "../pages/Ewallet.vue";
import PoinCash from "../pages/PoinCash.vue";
import Rebate from "../pages/Rebate.vue";
import Pulsa from "../pages/Pulsa.vue";
import Quarter from "../pages/Quarter.vue";
import Login from "../pages/Login.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import PointCashDetails from "../pages/PointCashDetails.vue";
import RebateDetails from "../pages/RebateDetails.vue";
import PulsaDetails from "../pages/PulsaDetails.vue";
import EwalletDetails from "../pages/EwalletDetails.vue";
import TransactionDetails from "../pages/TransactionDetails.vue";
import SuccessPage from "../pages/SuccessPage.vue";
import Registrasi from "../pages/Registrasi.vue";
import Posm from "../pages/Posm.vue";
import TransactionProduct from "../pages/TransactionProduct.vue";
import TransactionRebate from "../pages/TransactionRebate.vue";
import TransactionEwallet from "../pages/TransactionEwallet.vue";
import TransactionPulsa from "../pages/TransactionPulsa.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home/:outlet_id",
    props: true,
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Catalog",
    component: Catalog,
    name: "catalog"
  },
  {
    path: "/allproduct/:id",
    component: Allproduct,
    name: "allproduct",
    props: true
  },
  {
    path: "/Categories/:outlet_id",
    component: Categories,
    name: "categories",
    props: true
  },
  {
    path: "/product/:outlet_id",
    component: Product,
    name: "product",
    props: true
  },
  {
    path: "/ewallet/:outlet_id",
    component: Ewallet,
    name: "ewallet",
    props: true
  },
  {
    path: "/PoinCash/:outlet_id",
    component: PoinCash,
    name: "poincash",
    props: true
  },
  {
    path: "/Rebate/:outlet_id",
    component: Rebate,
    name: "rebate",
    props: true
  },
  {
    path: "/Pulsa",
    component: Pulsa,
    name: "pulsa",
    props: true
  },
  {
    path: "/Quarter/:version/:outlet_id",
    component: Quarter,
    name: "Quarter",
    props: true
  },
  {
    path: "/",
    component: Login,
    name: "login",
    props: true
  },
  {
    path: "/ProductDetail/:outlet_id",
    component: ProductDetails,
    name: "productdetail",
    props: true
  },
  {
    path: "/PointCashDetails/:outlet_id",
    component: PointCashDetails,
    name: "pointcashdetails",
    props: true
  },
  {
    path: "/RebateDetails/:outlet_id",
    component: RebateDetails,
    name: "RebateDetails",
    props: true
  },
  {
    path: "/PulsaDetails",
    component: PulsaDetails,
    name: "PulsaDetails",
    props: true
  },
  {
    path: "/EwalletDetails",
    component: EwalletDetails,
    name: "EwalletDetails",
    props: true
  },
  {
    path: "/TransactionDetails/:outlet_id/:kode_transaksi",
    component: TransactionDetails,
    name: "TransactionDetails",
    props: true
  },
  {
    path: "/SuccessPage/:outlet_id",
    component: SuccessPage,
    name: "SuccessPage",
    props: true
  },
  {
    path: "/Registrasi/:outlet_id",
    component: Registrasi,
    name: "Registrasi",
    props: true
  },
  {
    path: "/Posm/:outlet_id",
    component: Posm,
    name: "Posm",
    props: true
  },
  {
    path: "/TransactionProduct/:outlet_id",
    component: TransactionProduct,
    name: "TransactionProduct",
    props: true
  },
  {
    path: "/TransactionRebate",
    component: TransactionRebate,
    name: "TransactionRebate",
    props: true
  },
  {
    path: "/TransactionEwallet",
    component: TransactionEwallet,
    name: "TransactionEwallet",
    props: true
  },
  {
    path: "/TransactionPulsa",
    component: TransactionPulsa,
    name: "TransactionPulsa",
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
