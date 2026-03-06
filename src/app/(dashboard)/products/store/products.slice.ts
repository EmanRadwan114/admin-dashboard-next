import { createSlice } from "@reduxjs/toolkit";
import { IProductsStore } from "../types/products.types";

const initialState: IProductsStore = {
  cachedCategories: [],
  cachedProducts: [],
  filteredCachedProducts: [],
  selectedCategory: "",
  sortByPrice: "",
  currentPage: 1,
  paginatedProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.cachedCategories = action.payload;
    },
    setProducts(state, action) {
      state.cachedProducts = action.payload;
      state.filteredCachedProducts = action.payload;
    },
    filterProductsByCategory(state, action) {
      state.selectedCategory = action.payload;

      let result = [...state.cachedProducts];

      if (state.selectedCategory !== "") {
        result = result.filter(
          (p) =>
            p.category.toLocaleLowerCase() ===
            state.selectedCategory.toLocaleLowerCase(),
        );
      }

      result.sort((a, b) =>
        state.sortByPrice === "asc" ? a.price - b.price : b.price - a.price,
      );

      state.filteredCachedProducts = result;
    },
    sortProductsByPrice(state, action) {
      state.sortByPrice = action.payload;

      state.currentPage = 1;

      state.filteredCachedProducts.sort((a, b) =>
        state.sortByPrice === "asc" ? a.price - b.price : b.price - a.price,
      );
    },
    handlePagination(state) {
      const limit = 20;
      const skip = (state.currentPage - 1) * limit;

      state.paginatedProducts = state.filteredCachedProducts.slice(skip);
    },
    changePaginatePage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setCategories,
  setProducts,
  filterProductsByCategory,
  sortProductsByPrice,
  handlePagination,
  changePaginatePage,
} = productsSlice.actions;
export default productsSlice.reducer;
