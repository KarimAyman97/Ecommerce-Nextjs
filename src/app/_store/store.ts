import { configureStore } from "@reduxjs/toolkit";
import ProductSidebarReducer from "./features/section-header.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import TrendingProductsSlice from "./features/trending-slice";
import direction from "./features/direction.slice";
import CountInRowSlice from "./features/product-row-count.slice";
import wishlistSlice from "./features/wishlist-slice";
import cartSlice from "./features/cart-slice";

// config the store
export const store = configureStore({
  reducer: {
    productSidebar: ProductSidebarReducer,
    TrendingProductsSlice: TrendingProductsSlice,
    direction: direction,
    countInRowProducts: CountInRowSlice,
    wishListSlice: wishlistSlice,
    cartSlice: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
