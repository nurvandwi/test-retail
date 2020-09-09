export const cartItemCount = (state) => {
  return state.cart.length;
};
export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
};
export const cartEwalletCount = (state) => {
  return state.cartEwallet.length;
};
export const cartEwalletPrice = (state) => {
  let total = 0;
  state.cartEwallet.forEach((item) => {
    total += item.ewallet.price * item.quantity;
  });
  return total;
};
export const cartPoincashCount = (state) => {
  return state.cartPoincash.length;
};
export const cartPoincashPrice = (state) => {
  let total = 0;
  state.cartPoincash.forEach((item) => {
    total += item.poincash.price * item.quantity;
  });
  return total;
};
export const cartRebateCount = (state) => {
  return state.cartRebate.length;
};
export const cartRebatePrice = (state) => {
  let total = 0;
  state.cartRebate.forEach((item) => {
    total += item.rebate.price * item.quantity;
  });
  return total;
};
