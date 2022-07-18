import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    currUrl: "", 
    beforeUrl: "",
  },
  reducers: {
    getBeforeUrl: (state, action) => {
      state.beforeUrl = action.payload
    },
    getCurrUrl: (state, action) => {
      state.currUrl = action.payload
    },
  },
  
})

export default pagesSlice.reducer
export const { getCurrUrl, getBeforeUrl } = pagesSlice.actions
export const selectCurrUrl = (state) => state.pagesReducer.currUrl
export const selectBeforeUrl = (state) => state.pagesReducer.beforeUrl
