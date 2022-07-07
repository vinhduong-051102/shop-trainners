import { configureStore } from '@reduxjs/toolkit'
import { MenuReducer } from '@/Pages/HomePage/components/ProductSlider/components/Menu/MenuSlice'

export const store = configureStore({
  reducer: {
    MenuReducer
  }
})

