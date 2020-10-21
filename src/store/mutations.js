export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};
export const SET_EWALLETS = (state, ewallets) => {
  state.ewallets = ewallets;
};
export const SET_POINCASHS = (state, poincashs) => {
  state.poincashs = poincashs;
};
export const SET_REBATES = (state, rebates) => {
  state.rebates = rebates;
};
export const SET_PRODUCT = (state, product) => {
  state.product = product;
};
export function ADD_TO_CART(state, { product, quantity }) {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity,
  });
};
export function CHECKOUT_CART(state, { product, quantity }) {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity,
  });
  console.log('hai')
  console.log(productInCart)
  // return state.cart=[]
};
export const ADD_TO_EWALLET = (state, { ewallet, quantity }) => {
  let ewalletInCart = state.cartEwallet.find(item => {
    return item.ewallet.id === ewallet.id;
  });
  if (ewalletInCart) {
    ewalletInCart.quantity += quantity;
    return;
  }
  state.cartEwallet.push({
    ewallet,
    quantity
  });
};
export const ADD_TO_POINCASH = (state, { poincash, quantity }) => {
  let poincashInCart = state.cartPoincash.find(item => {
    return item.poincash.kd_produk === poincash.id;
  });
  if (poincashInCart) {
    poincashInCart.quantity += quantity;
    return;
  }
  state.cartPoincash.push({
    poincash,
    quantity
  });
};
export const ADD_TO_REBATE = (state, { rebate, quantity }) => {
  let rebateInCart = state.cartRebate.find(item => {
    return item.rebate.periode === rebate.periode;
  });
  if (rebateInCart) {
    rebateInCart.quantity != quantity;
    alert("Tidak bisa lebih dari 1 kali");
    return;
  }

  state.cartRebate.push({
    rebate,
    quantity
  });
};
export const SET_CART = (state, cartItems) => {
  state.cart = cartItems;
};
export const SET_EWALLET = (state, ewalletItems) => {
  state.ewalletItems = ewalletItems;
};
export const SET_POINCASH = (state, poincashItems) => {
  state.poincashItems = poincashItems;
};
export const SET_REBATE = (state, rebateItems) => {
  state.rebateItems = rebateItems;
};
export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id !== product.id;
  });
};
export const CLEAR_CART_ITEMS = state => {
  state.cart = [];
};
