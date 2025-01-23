import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    filteredData: [],
  },
  reducers: {
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setFilteredData } = dataSlice.actions;
export default dataSlice.reducer;