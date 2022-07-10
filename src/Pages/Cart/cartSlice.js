import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push({...action.payload})
    },
    removeProduct: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
})

export default cartSlice.reducer
export const { addProduct, removeProduct } = cartSlice.actions
export const selectListProduct = (state) => state.cartReducer
