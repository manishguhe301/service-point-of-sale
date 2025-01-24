import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "@/utils/types";

type DataState = {
  filteredData: Dish[];
};

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    filteredData: [],
  } as DataState,
  reducers: {
    setFilteredData: (state, action: PayloadAction<Dish[]>) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setFilteredData } = dataSlice.actions;
export default dataSlice.reducer;
