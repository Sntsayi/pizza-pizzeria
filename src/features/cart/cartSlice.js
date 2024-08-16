import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'macaroni',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload =  newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      // this slicename.caseReducer.oneOfTheWritedReducer(withSameState ,withSameAcrtion),is one of the most good property of the redux/toolkit to call reducer in another reducer.
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// this is for the selector of the CartOverview componen:not neccocsry do it here we can write code inside the selector of the CartOverview component
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

// use this function in menuItem conmonent ,to show or not show delete button in that component by know the quantity of that pizza..?? is nulish operation
export const getCurrentSelectorById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
