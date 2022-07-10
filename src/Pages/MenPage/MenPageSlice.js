import { createSlice } from "@reduxjs/toolkit";

const MenPageSlice = createSlice({
  name: "menPage",
  initialState: {
    optionSort: 0,
    page: 1
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    changeOptionSort: (state, action) => {
      state.optionSort = action.payload
    }
  }
})

export default MenPageSlice.reducer
export const { changePage, changeOptionSort } = MenPageSlice.actions
export const selectPage = (state) => state.menPageReducer.page
export const selectOptionSort = (state) => state.menPageReducer.optionSort