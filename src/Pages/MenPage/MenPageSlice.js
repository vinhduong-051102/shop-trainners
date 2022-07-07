import { createSlice } from "@reduxjs/toolkit";

const MenPageSlice = createSlice({
  name: "menPage",
  initialState: {
    page: 1
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    }
  }
})

export default MenPageSlice.reducer
export const { changePage } = MenPageSlice.actions
export const selectPage = (state) => state.MenPageReducer.page