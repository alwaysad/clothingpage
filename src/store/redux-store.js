import { configureStore } from "@reduxjs/toolkit";
import bascetSlice from "./bascet-item";
import favouriteItemSlice from "./favourite-item";



const store=configureStore({reducer:{favourite:favouriteItemSlice.reducer, bascet:bascetSlice.reducer}})




export default store;