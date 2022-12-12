import { createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";


const initialAuthState = {
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logIn(state, action) {
      
      const newToken = action.payload;
      state.token = newToken;
      if (state.token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
     
      localStorage.setItem("token", newToken);
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem("token");
      NotificationManager.success('Succesfully logged out','LogOut',2000);
    },
  },
});

export default AuthSlice;

export const { logIn, logOut } = AuthSlice.actions;
