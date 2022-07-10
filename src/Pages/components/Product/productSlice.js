import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    addProduct: (state, action) => {
      Object.assign(state, action.payload)
    },
    increaseAmount: (state) => {
      state.amount++;
    },
    decreaseAmount: (state) => {
      if(state.amount > 1) {
        state.amount--
      }
      else {
        state.amount = 1
      }
    }
  }
})

export default productSlice.reducer
export const { addProduct, increaseAmount, decreaseAmount } = productSlice.actions
export const selectProduct = (state) => state.productReducer