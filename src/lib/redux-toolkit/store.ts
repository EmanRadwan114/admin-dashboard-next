import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/app/(dashboard)/dashboard/store/products.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
