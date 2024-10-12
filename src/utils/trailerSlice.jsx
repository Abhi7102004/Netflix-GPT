import { createSlice } from "@reduxjs/toolkit";

const trailerSlice=createSlice({
    name:"trailer",
    initialState:{
        trailer:null,
    },
    reducers:{
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})
export default trailerSlice.reducer;
export const {addTrailer}=trailerSlice.actions