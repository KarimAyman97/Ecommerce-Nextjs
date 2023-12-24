import { createSlice } from "@reduxjs/toolkit";

type initialState = { direction: string };

const initialState = { direction: "ltr" } as initialState;

const DirectionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    leftToRight: (state) => {
      state.direction = "ltr";
    },
    rightToLeft: (state) => {
      state.direction = "rtl";
    },
  },
});

export const { leftToRight, rightToLeft } = DirectionSlice.actions;
export default DirectionSlice.reducer;
