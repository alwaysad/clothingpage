import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import bascetSlice from "./bascet-item";
import favouriteItemSlice from "./favourite-item";
import itemslice from "./item-store"



const store=configureStore({reducer:{favourite:favouriteItemSlice.reducer, bascet:bascetSlice.reducer, auth:AuthSlice.reducer, item:itemslice.reducer}})




export default store;