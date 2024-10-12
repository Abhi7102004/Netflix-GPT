import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showNames: null,
    showList: null,
  },
  reducers: {
    addGptMovieResults: (state, action) => {
      const { gptNames, gptItems } = action.payload;
      state.showNames = gptNames;
      state.showList = gptItems;
    },
  },
});

export default gptSlice.reducer;
export const { addGptMovieResults } = gptSlice.actions;
