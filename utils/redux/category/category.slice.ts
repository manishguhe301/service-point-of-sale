import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = {
  category: string;
};

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  } as CategoryState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
