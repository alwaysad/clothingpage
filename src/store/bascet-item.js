import { createSlice } from "@reduxjs/toolkit";

const initialBascetState = { items: [], totalQuantity: 0, bascetTotal: 0 };

const bascetSlice = createSlice({
  name: "bascet",
  initialState: initialBascetState,
  reducers: {
    addToBascet(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.bascetTotal = state.bascetTotal + newItem.price;
      const existingItem = state.items.find((state) => state.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeFromBascet(state, action) {
      const itemId = action.payload;
      const removedItem = state.items.find((state) => state.id === itemId);
      state.totalQuantity--;
      state.bascetTotal=state.bascetTotal-removedItem.price;
      if (removedItem.quantity === 1) {
       state.items= state.items.filter((state) => state.id !== itemId);
      } else {
        removedItem.quantity--;
      }
    },
  },
});

export default bascetSlice;
export const { addToBascet, removeFromBascet } = bascetSlice.actions;
