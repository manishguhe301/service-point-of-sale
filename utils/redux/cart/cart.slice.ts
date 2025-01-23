import { Dish } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as Dish[],
  },
  reducers: {
    addToCart: (state, action: { payload: Dish }) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: { payload: number }) => {
      state.cart = state.cart.filter((item: Dish) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
