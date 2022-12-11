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
      state.totalQuantity++;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if(!existingItem){
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity:1,
          image:newItem.image
        });
      }
      else{
        existingItem.quantity++;
      }
  
      
      
    },
    removeFromFavourite(state, action) {
      const itemId = action.payload;
      const removedItem = state.items.find((item) => item.id === itemId);
      state.totalQuantity--;
      if (removedItem.quantity === 1) {
       state.items= state.items.filter((item) => item.id !== itemId);
      } else {
        removedItem.quantity--;
      }
    },
  

  },
});

export default favouriteItemSlice;
export const { addtoFavourite, removeFromFavourite } =
  favouriteItemSlice.actions;
