import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies}=movieSlice.actions