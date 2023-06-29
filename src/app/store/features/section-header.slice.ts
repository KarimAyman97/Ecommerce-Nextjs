import { createSlice } from "@reduxjs/toolkit";

type initialState = { isOpen: boolean };

const initialState = { isOpen: false } as initialState;

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
