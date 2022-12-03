import { configureStore } from "@reduxjs/toolkit";
import favouriteItemSlice from "./favourite-item";



const store=configureStore({reducer:{favourite:favouriteItemSlice.reducer}})




export default store;