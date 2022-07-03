import { createSlice } from '@reduxjs/toolkit'

export const MenuSlice = createSlice({
  name: 'productMenu',
  initialState: {
    value: 0
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const MenuReducer = MenuSlice.reducer
export const { setValue } = MenuSlice.actions
export const selectValue = (state) => state.MenuReducer.value