import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";


const initialItemState = {
  loading:false,
  error:''
};


export const postItem = createAsyncThunk("postItem", async (data) => {
  try {
  const response=  await fetch(
      "https://clothingsite-48df9-default-rtdb.firebaseio.com/clothes.json",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if(!response.ok){
      throw new Error('Could not post the item');
    }
  } catch (error) {
    NotificationManager.error(error.message);
  }
  


});

const itemSlice = createSlice({
  name: "item",
  initialState: initialItemState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(postItem.pending,(state,action)=>{
        state.loading=true;
        state.error='';
        
    })

    builder.addCase(postItem.fulfilled,(state,action)=>{
      state.loading=false;


    })
    builder.addCase(postItem.rejected,(state,action)=>{
        state.loading=false;
        state.error='error happened while posting data'
    })
  },
});


export default itemSlice;