import { createSlice } from "@reduxjs/toolkit";

type initialState = { wishlist: any[] };

const getInitialWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

const initialState = { wishlist: getInitialWishlist() } as initialState;

const WishlistSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    removeWishlistItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => item.id != itemIdToRemove
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    addWishlistItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishlist.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.wishlist = [...state.wishlist, newItem];
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
  },
});

export const { removeWishlistItem, addWishlistItem } = WishlistSlice.actions;
export default WishlistSlice.reducer;
