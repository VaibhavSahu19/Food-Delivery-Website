import { Slice, createSlice } from "@reduxjs/toolkit";

const restuarantSlice = createSlice({
  name: "restuarant",
  initialState: {
    resoId: null,
    restuarantInfo: [],
  },
  reducers: {
    setRestuarantId: (state, action) => {
      state.resoId = action.payload;
    },
    setRestuarantInfo: (state, action) => {
      state.restuarantInfo = action.payload;
    },
  },
});

export const { setRestuarantId, setRestuarantInfo } = restuarantSlice.actions;
export default restuarantSlice.reducer;
