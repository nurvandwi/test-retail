/* eslint-disable */ 
import axios from "axios";
export function getProducts({ commit }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products")
    .then((response) => {
      commit("SET_PRODUCTS", response.data.data.data);
    });
}
export function getEwallets({ commit }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products")
    .then((response) => {
      commit("SET_EWALLETS", response.data.data.data);
    });
}
export function getPoinCashs({ commit }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products")
    .then((response) => {
      commit("SET_POINCASHS", response.data.data.data);
    });
}
export function getRebates({ commit }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products")
    .then((response) => {
      commit("SET_REBATES", response.data.data.data);
    });
}
export function getProduct({ commit }, { id }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products", {
      params: {
        id,
      },
    })
    .then((response) => {
      commit("SET_PRODUCT", response.data.data);
    });
}

export function addProductToCart({ commit }, { product, quantity }) {
  commit("ADD_TO_CART", {
    product,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    product_id: product.id,
    quantity,
  });
}
export function addEwalletToCart({ commit }, { ewallet, quantity }) {
  commit("ADD_TO_EWALLET", {
    ewallet,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    ewallet_id: ewallet.id,
    quantity,
  });
}

export function addPoinCashToCart({ commit }, { poincash, quantity }) {
  commit("ADD_TO_POINCASH", {
    poincash,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    ewallet_id: poincash.id,
    quantity,
  });
}
export function addRebateToCart({ commit }, { rebate, quantity }) {
  commit("ADD_TO_REBATE", {
    rebate,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    rebate_id: rebate.id,
    quantity,
  });
}
export function getCartItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_CART", response.data);
    });
}
export function getEwalletItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_EWALLET", response.data);
    });
}
export function getPoincashItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_POINCASH", response.data);
    });
}
export function getRebateItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_REBATE", response.data);
    });
}
export function removeProductFromCart({ commit }, product) {
  commit("REMOVE_PRODUCT_FROM_CART", product);
  axios.delete(
    `http://shayna-backend.belajarkoding.com/api/cart/${product.id}`,
    {}
  );
}
export function clearCartItems({ commit }) {
  commit("CLEAR_CART_ITEMS");
  axios.delete("http://shayna-backend.belajarkoding.com/api/cart");
}
