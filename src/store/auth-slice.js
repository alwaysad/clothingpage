import { createSlice } from "@reduxjs/toolkit";



const initialAuthState={token:"",isLoggedIn:false}
const AuthSlice=createSlice({name:"auth",initialState:initialAuthState,reducers:{
    logIn(state,action){
    const newToken=action.payload;
    state.token=newToken;
    if(state.token){
        state.isLoggedIn=true;
    }
    else{
        state.isLoggedIn=false;
    }

    localStorage.setItem('token',newToken);
    

    },
    logOut(state){
        state.isLoggedIn=false;
        state.token=null;
    localStorage.removeItem('token');


    }
}})


export default AuthSlice;

export const {logIn,logOut}=AuthSlice.actions;