import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  countInRowLargeScreens: number;
  countInRowMediumScreens: number;
  countInRowSmallScreens: number;
};

const initialState = {
  countInRowLargeScreens: 4,
  countInRowMediumScreens: 3,
  countInRowSmallScreens: 1,
} as initialState;

const CountInRowSlice = createSlice({
  name: "countInRow",
  initialState,
  reducers: {
    changeRowCountLargeScreens: (state, action) => {
      state.countInRowLargeScreens = action.payload;
    },
    changeRowCountMediumScreens: (state, action) => {
      state.countInRowMediumScreens = action.payload;
    },
    changeRowCountSmallScreens: (state, action) => {
      state.countInRowSmallScreens = action.payload;
    },
  },
});

export const {
  changeRowCountLargeScreens,
  changeRowCountMediumScreens,
  changeRowCountSmallScreens,
} = CountInRowSlice.actions;
export default CountInRowSlice.reducer;
