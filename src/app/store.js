import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from '@/Pages/HomePage/components/ProductSlider/components/Menu/MenuSlice'
import MenPageReducer from '@/Pages/MenPage/MenPageSlice'

export const store = configureStore({
  reducer: {
    MenuReducer,
    MenPageReducer
  }
})

