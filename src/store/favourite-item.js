import { createSlice } from "@reduxjs/toolkit";


const initialFavouriteState={
    items:[],
    totalQuantity:0
}


const favouriteItemSlice=createSlice({name:'favourite', initialState:initialFavouriteState, reducers:{
    addtoFavourite(state,action){
    state.items.push({
        id:action.payload.id,
        name:action.payload.name,
        price:action.payload.price
    })
    },
    removeFromFavourite(state,action){}
}})


export default favouriteItemSlice.reducer;
export const {addtoFavourite,removeFromFavourite}=favouriteItemSlice.actions;