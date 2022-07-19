import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '@/Pages/HomePage/components/ProductSlider/components/Menu/MenuSlice'
import menPageReducer from '@/Pages/MenPage/MenPageSlice'
import productReducer from '@/Pages/components/Product/productSlice'
import cartReducer from '@/Pages/Cart/cartSlice'
import registerPageReducer from '@/Pages/RegisterPage/registerPageSlice'
import loginPageReducer from '@/Pages/LoginPage/loginPageSlice'
import pagesReducer from '@/Pages/pagesSlice'


export const store = configureStore({
  reducer: {
    menuReducer,
    menPageReducer,
    productReducer,
    cartReducer,
    registerPageReducer,
    loginPageReducer,
    pagesReducer,
  }
})

