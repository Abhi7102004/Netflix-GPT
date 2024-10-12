import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvshowsReducer from "./tvShowsSlice";
import trailerReducer from "./trailerSlice";
import trendingReducer from "./trendingSlice";
import languageReducer from "./configSlice";
import gptReducer from "./gptSlice";
import pathReducer from "./pathSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvshows: tvshowsReducer,
    trailer: trailerReducer,
    trending: trendingReducer,
    language: languageReducer,
    gpt: gptReducer,
    path: pathReducer,
  },
});
export default appStore;
