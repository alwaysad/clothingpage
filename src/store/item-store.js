import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  loading:false,
  error:''
};

export const postItem = createAsyncThunk("postItem", async (data) => {
   await fetch(
    "https://clothingsite-48df9-default-rtdb.firebaseio.com/clothes.json",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
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