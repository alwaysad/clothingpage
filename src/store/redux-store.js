import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import bascetSlice from "./bascet-item";
import favouriteItemSlice from "./favourite-item";



const store=configureStore({reducer:{favourite:favouriteItemSlice.reducer, bascet:bascetSlice.reducer, auth:AuthSlice.reducer}})




export default store;