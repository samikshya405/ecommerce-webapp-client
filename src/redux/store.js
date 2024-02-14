import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import productReducer from './product/productSlice'
import cartReducer from './cart/cartSlice'
import wishlistReducer  from './wishlist/wishlistSlice'

export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        cart: cartReducer,
        wishList:wishlistReducer
        

    }

})