import { createSlice } from "@reduxjs/toolkit";

export const categories = ["jewelery", "men's clothing", "ay ahga", "4"];

type initialState = { category: string };

const initialState = { category: categories[0] } as initialState;

const MostSellingHomeCategorySlice = createSlice({
  name: "MostSellingHomeCategory",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = MostSellingHomeCategorySlice.actions;
export default MostSellingHomeCategorySlice.reducer;
