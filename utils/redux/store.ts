import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, } from "react-redux";
import { categorySlice } from "./category/category.slice";
import { dataSlice } from "./data/data.slice";

const store = configureStore({
  reducer: {
    categorySlice: categorySlice.reducer,
    dataSlice: dataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch<AppDispatch>;
export const useAppSelector = useSelector;

export default store;
