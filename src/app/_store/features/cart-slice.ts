import { createSlice } from "@reduxjs/toolkit";

type initialState = { cart: any[] };

const getInitialCart = () => {
  const storedCart =
    typeof window !== "undefined" ? window.localStorage.getItem("cart") : false;
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = { cart: getInitialCart() } as initialState;

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    removeCartItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id != itemIdToRemove);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart = [...state.cart, newItem];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    increaseCartItemQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === itemIdToIncrease
      );
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decreaseCartItemQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === itemIdToDecrease
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
