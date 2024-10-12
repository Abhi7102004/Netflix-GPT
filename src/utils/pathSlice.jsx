import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
  name: "path",
  initialState: {
    path: "movies",
  },
  reducers: {
    setPath: (state, action) => {
        state.path=action.payload;
    },
  },
});

export default pathSlice.reducer;
export const {setPath}=pathSlice.actions