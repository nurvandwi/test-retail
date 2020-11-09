export const cartItemCount = state => {
  return state.cart.length;
};

export function cartTotalPrice(state) {
  let total = 0;
  state.cart.forEach(item => {
    total += item.product.poin * item.quantity;
  });
  return total;
}

export function plsTotalPrice(state) {
  // console.log(state.cartPulsa.nominal)
  let total = 0;
  state.cartPulsa.forEach(item => {
    total = item.poin_text;
  });
  return total;
}

export function wltTotalPrice(state) {
  // console.log(state.cartEwallet.kd_produk)
  let total = 0;
  state.cartEwallet.forEach(item => {
    total = item.nominal;
  });
  return total;
}

export function rebateTotalPrice(state) {
  let total = 0;
  state.cartRebate.forEach(item => {
    total += item.rebate.rebate_value * item.quantity;
  });
  return total;
}

export function poincashTotalPrice(state) {
  let total = 0;
  state.cartPoincash.forEach(item => {
    total += item.poincash.poin * item.quantity;
  });
  return total;
}

export const cartEwalletCount = state => {
  return state.cartEwallet.length;
};
export const cartEwalletPrice = state => {
  let total = 0;
  state.cartEwallet.forEach(item => {
    total += item.ewallet.price * item.quantity;
  });
  return total;
};
export const cartPoincashCount = state => {
  return state.cartPoincash.length;
};
export const cartPoincashPrice = state => {
  let total = 0;
  state.cartPoincash.forEach(item => {
    total += item.poincash.poin * item.quantity;
  });
  return total;
};
export const cartRebateCount = state => {
  return state.cartRebate.length;
};
export const cartRebatePrice = state => {
  let total = 0;
  state.cartRebate.forEach(item => {
    total += item.rebate.rebate_value * item.quantity;
  });
  return total;
};
