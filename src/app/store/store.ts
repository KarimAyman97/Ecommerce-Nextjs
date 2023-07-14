import { configureStore } from "@reduxjs/toolkit";
import ProductSidebarReducer from "./features/section-header.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import mostSellingHomeCategory from "./features/most-selling-home-category";
import direction from "./features/direction.slice";

// config the store
export const store = configureStore({
  reducer: {
    productSidebar: ProductSidebarReducer,
    MostSellingHomeCategory: mostSellingHomeCategory,
    direction: direction,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
