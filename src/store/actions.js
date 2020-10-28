/* eslint-disable */
import axios from "axios";
import {SET_CARTV} from "./mutations";

export function getProducts({commit}, {outlet_id, token}) {
    console.log(this);
    axios
        .get("https://www.inosis.co.id/mv_demo_api/api.php/list-produk-hadiah", {
            params: {
                outlet_id,
                token
            }
        })
        .then(response => {
            commit("SET_PRODUCTS", response.data.data);
        });
}

export function getEwallets({commit}) {
    console.log(this);
    axios
        .get("http://shayna-backend.belajarkoding.com/api/products")
        .then(response => {
            commit("SET_EWALLETS", response.data.data.data);
        });
}

export function getPoinCashs({commit}, {outlet_id, token}) {
    console.log(this);
    axios
        .get(
            "https://www.inosis.co.id/mv_demo_api/api.php/list-pointocash-hadiah",
            {
                params: {
                    outlet_id,
                    token
                }
            }
        )
        .then(response => {
            commit("SET_POINCASHS", response.data.data);
        });
}

export function getRebates({commit}, {outlet_id, token}) {
    console.log(this);
    axios
        .get("https://www.inosis.co.id/mv_demo_api/api.php/list-rebate-hadiah", {
            params: {
                outlet_id,
                token
            }
        })
        .then(response => {
            commit("SET_REBATES", response.data.data);
        });
}

export function getProduct({commit}, {id}) {
    console.log(this);
    axios
        .get("http://shayna-backend.belajarkoding.com/api/products", {
            params: {
                id
            }
        })
        .then(response => {
            commit("SET_PRODUCT", response.data.data);
        });
}

export function checkOutCartItems({commit}, {outlet_id, token}) {
    axios
        .get("https://www.inosis.co.id/mv_demo_api/api.php/post-produk-hadiah", {
            headers: {
                "content-type": "application/json"
            },
            params: {
                token
            }
        })
        .then(response => {
            commit("SET_CARTV2", response.data);
        });
    console.log(SET_CARTV2);
}

export function addProductToCart({commit}, {product, quantity}) {
    commit("ADD_TO_CART", {
        product,
        quantity
    });

}

export function addPulsaToCart({commit}, {no_hp, poin, poin_text, nominal, kd_produk, quantity}) {
    commit("ADD_TO_PULSA", {
        no_hp,
        nominal,
        kd_produk,
        quantity,
        poin, poin_text
    });
}

export function addEwalletToCart({commit}, {no_hp, poin, ewallet, nominal, kd_produk, quantity}) {
    commit("ADD_TO_EWALLET", {
        no_hp,
        kd_produk,
        quantity,
        nominal,
        ewallet,
        poin
    });
}

export function addPoinCashToCart({commit}, {poincash, quantity}) {
    commit("ADD_TO_POINCASH", {
        poincash,
        quantity
    });
}

export function checkOutCart({state}, {outlet_id, token}) {
    console.log(outlet_id, token);
    let data = {
        outlet_id: outlet_id,
        data: state.cart.map(function (x) {
            return {kd_produk: x.product.kd_produk, quantity: x.quantity};
        })
    };

    console.log(data);
    axios.post(
        "https://www.inosis.co.id/mv_demo_api/api.php/post-produk-hadiah",
        data,
        {
            params: {
                token
            },
            headers: {
                "content-type": "application/json"
            }
        }
    );
    return state.cart = []
}

export function checkOutRebate({state}, {outlet_id, token}) {
    console.log(outlet_id, token);
    let data = {
        outlet_id: outlet_id,
        data: state.cartRebate.map(function (x) {
            return {periode: x.rebate.periode, quantity: x.quantity};
        })
    };

    console.log(data);
    axios.post(
        "https://www.inosis.co.id/mv_demo_api/api.php/post-rebate-hadiah",
        data,
        {
            params: {
                token
            },
            headers: {
                "content-type": "application/json"
            }
        }
    );
    return state.cartRebate = []
}

export function checkOutPoinCash({state}, {outlet_id, token}) {
    console.log(outlet_id, token);
    let data = {
        outlet_id: outlet_id,
        data: state.cartPoincash.map(function (x) {
            return {kd_produk: x.poincash.kd_produk, quantity: x.quantity};
        })
    };

    console.log(data);
    axios.post(
        "https://www.inosis.co.id/mv_demo_api/api.php/post-pointocash-hadiah",
        data,
        {
            params: {
                token
            },
            headers: {
                "content-type": "application/json"
            }
        }
    );
    return state.cartPoincash = []
}

export function checkOutPulsa({state}, {outlet_id, token}) {
    console.log(outlet_id, token);
    let data = {
        outlet_id: outlet_id,
        data: state.cartPulsa.map(function (x) {
            return {kd_produk: x.kd_produk, quantity: 1, no_hp: x.no_hp};
        })
    };

    console.log(data);
    axios.post(
        "https://www.inosis.co.id/mv_demo_api/api.php/post-pulsa-hadiah",
        data,
        {
            params: {
                token
            },
            headers: {
                "content-type": "application/json"
            }
        }
    );
    return state.cartPulsa = []
}

export function checkOutEwallet({state}, {outlet_id, token}) {
    console.log(outlet_id, token);
    let data = {
        outlet_id: outlet_id,
        data: state.cartEwallet.map(function (x) {
            return {kd_produk: x.kd_produk, quantity: 1, no_hp: x.no_hp};
        })
    };

    console.log(data);
    axios.post(
        "https://www.inosis.co.id/mv_demo_api/api.php/post-ewallet-hadiah",
        data,
        {
            params: {
                token
            },
            headers: {
                "content-type": "application/json"
            }
        }
    );
    return state.cartEwallet = []
}


export function addEwalletToCartw({commit}, {ewallet, quantity}) {
    commit("ADD_TO_EWALLET", {
        ewallet,
        quantity
    });
    axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
        ewallet_id: ewallet.id,
        quantity
    });
}


export function addRebateToCart({commit}, {rebate, quantity}) {
    commit("ADD_TO_REBATE", {
        rebate,
        quantity
    });
    axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
        rebate_id: rebate.id,
        quantity
    });
}

export function getCartItems({commit}) {
    axios
        .get("http://shayna-backend.belajarkoding.com/api/cart")
        .then(response => {
            commit("SET_CART", response.data);
        });
}

export function getEwalletItems({commit}) {
    axios
        .get("http://shayna-backend.belajarkoding.com/api/cart")
        .then(response => {
            commit("SET_EWALLET", response.data);
        });
}

export function getPoincashItems({commit}) {
    axios
        .get("http://shayna-backend.belajarkoding.com/api/cart")
        .then(response => {
            commit("SET_POINCASH", response.data);
        });
}

export function getRebateItems({commit}) {
    axios
        .get("http://shayna-backend.belajarkoding.com/api/cart")
        .then(response => {
            commit("SET_REBATE", response.data);
        });
}

export function removeProductFromCart({commit}, product) {
    commit("REMOVE_PRODUCT_FROM_CART", product);
    axios.delete(
        `http://shayna-backend.belajarkoding.com/api/cart/${product.id}`,
        {}
    );
}

export function removeRebateFromCart({commit}, rebate) {
    commit("REMOVE_REBATE_FROM_CART", rebate);
    axios.delete(
        `http://shayna-backend.belajarkoding.com/api/cart/${rebate.id}`,
        {}
    );
}

export function removePoincashFromCart({commit}, poincash) {
    commit("REMOVE_POINCASH_FROM_CART", poincash);
    axios.delete(
        `http://shayna-backend.belajarkoding.com/api/cart/${poincash.id}`,
        {}
    );
}

export function removePulsaFromCart({commit}) {
    commit("REMOVE_PULSA_FROM_CART");
}

export function removeEwalletFromCart({commit}) {
    commit("REMOVE_EWALLET_FROM_CART");
}

export function clearCartItems({commit}) {
    commit("CLEAR_CART_ITEMS");
    axios.delete("http://shayna-backend.belajarkoding.com/api/cart");
}
