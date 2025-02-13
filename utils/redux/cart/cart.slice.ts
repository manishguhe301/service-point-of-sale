import { Dish } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as Dish[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Dish>) => {
      state.cart = state.cart.concat(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item: Dish) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
