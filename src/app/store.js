import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '@/Pages/HomePage/components/ProductSlider/components/Menu/MenuSlice'
import menPageReducer from '@/Pages/MenPage/MenPageSlice'
import productReducer from '@/Pages/components/Product/productSlice'
import cartReducer from '@/Pages/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    menuReducer,
    menPageReducer,
    productReducer,
    cartReducer
  }
})

