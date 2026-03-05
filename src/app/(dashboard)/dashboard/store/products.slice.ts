import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../types/products.types";

const initialState: IProducts = {
  title: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
