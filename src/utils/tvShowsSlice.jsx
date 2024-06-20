import { createSlice } from "@reduxjs/toolkit";
const tvShowsSlice=createSlice({
    name:"tv-shows",
    initialState:{
        airingToday:null,
        onTheAir:null,
        popularTvShow:null,
        topRatedTvShow:null,
    },
    reducers:{
        addAiringToday:(state,action)=>{
            state.airingToday=action.payload
        },
        addOnTheAir:(state,action)=>{
            state.onTheAir=action.payload
        },
        addPopularTvShow:(state,action)=>{
            state.popularTvShow=action.payload
        },
        addTopRatedTvShow:(state,action)=>{
            state.topRatedTvShow=action.payload
        },
    }
})

export const {addAiringToday,addOnTheAir,addPopularTvShow,addTopRatedTvShow}=tvShowsSlice.actions
export default tvShowsSlice.reducer