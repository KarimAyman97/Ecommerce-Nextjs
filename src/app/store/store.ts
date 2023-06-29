import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./features/section-header.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// config the store
export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
