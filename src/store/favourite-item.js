import { createSlice } from "@reduxjs/toolkit";

const initialFavouriteState = {
  items: [],
  totalQuantity: 3,
};

const favouriteItemSlice = createSlice({
  name: "favourite",
  initialState: initialFavouriteState,
  reducers: {
    addtoFavourite(state, action) {
      const newItem = action.payload;
      console.log(action.payload);
      state.totalQuantity++;
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
      });
    },
  },
});

export default favouriteItemSlice;
export const { addtoFavourite, removeFromFavourite } =
  favouriteItemSlice.actions;
