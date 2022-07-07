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

export default MenuSlice.reducer
export const { setValue } = MenuSlice.actions
export const selectValue = (state) => state.MenuReducer.value