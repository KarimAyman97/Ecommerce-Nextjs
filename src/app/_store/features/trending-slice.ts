import { createSlice } from "@reduxjs/toolkit";

export const categories = ["Dinner-Set", "Pans", "Drinkware", "Trays & Bowls"];

type initialState = { category: string };

const initialState = { category: categories[0] } as initialState;

const TrendingProductsSlice = createSlice({
  name: "MostSellingHomeCategory",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = TrendingProductsSlice.actions;
export default TrendingProductsSlice.reducer;
