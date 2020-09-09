import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Allproduct from '../pages/Allproduct.vue'
import Product from '../pages/Product.vue'
import Categories from '../pages/Categories.vue'
import Ewallet from '../pages/Ewallet.vue'
import PoinCash from '../pages/PoinCash.vue'
import Rebate from '../pages/Rebate.vue'
import Pulsa from '../pages/Pulsa.vue'
import Quarter from '../pages/Quarter.vue'
import Login from '../pages/Login.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import PointCashDetails from '../pages/PointCashDetails.vue'
import RebateDetails from '../pages/RebateDetails.vue'
import PulsaDetails from '../pages/PulsaDetails.vue'
import EwalletDetails from '../pages/EwalletDetails.vue'
import TransactionDetails from '../pages/TransactionDetails.vue'
import SuccessPage from '../pages/SuccessPage.vue'
import Registrasi from '../pages/Registrasi.vue'
import Posm from '../pages/Posm.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: '/Catalog',
    component: Catalog,
    name: 'catalog'
},
{
    path: '/allproduct/:id',
    component: Allproduct,
    name: 'allproduct',
    props: true
},
{
    path: '/Categories',
    component: Categories,
    name: 'categories',
    props: true
},
{
    path: '/product',
    component: Product,
    name: 'product',
    props: true
},
{
    path: '/ewallet',
    component: Ewallet,
    name: 'ewallet',
    props: true
},
{
    path: '/PoinCash',
    component: PoinCash,
    name: 'poincash',
    props: true
},
{
    path: '/Rebate',
    component: Rebate,
    name: 'rebate',
    props: true
},
{
    path: '/Pulsa',
    component: Pulsa,
    name: 'pulsa',
    props: true
},
{
    path: '/Quarter',
    component: Quarter,
    name: 'quarter',
    props: true
},
{
    path: '/Login',
    component: Login,
    name: 'login',
    props: true
},
{
    path: '/ProductDetail',
    component: ProductDetails,
    name: 'productdetail',
    props: true
},
{
    path: '/PointCashDetails',
    component: PointCashDetails,
    name: 'pointcashdetails',
    props: true
},
{
    path: '/RebateDetails',
    component: RebateDetails,
    name: 'RebateDetails',
    props: true
},
{
    path: '/PulsaDetails',
    component: PulsaDetails,
    name: 'PulsaDetails',
    props: true
},
{
    path: '/EwalletDetails',
    component: EwalletDetails,
    name: 'EwalletDetails',
    props: true
},
{
    path: '/TransactionDetails',
    component: TransactionDetails,
    name: 'TransactionDetails',
    props: true
},
{
    path: '/SuccessPage',
    component: SuccessPage,
    name: 'SuccessPage',
    props: true
},
{
    path: '/Registrasi',
    component: Registrasi,
    name: 'Registrasi',
    props: true
},
{
    path: '/Posm',
    component: Posm,
    name: 'Posm',
    props: true
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
