import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import productReducer from './product/productSlice'
import cartReducer from './cart/cartSlice'
import wishlistReducer  from './wishlist/wishlistSlice'
import storage from 'redux-persist/lib/storage'; 
import persistReducer from 'redux-persist/es/persistReducer'
import categoryReducer from './category/categorySlice'

const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  const perisitedWishlistReducer = persistReducer(persistConfig, wishlistReducer )
export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        cart:persistedCartReducer,
        // cart: cartReducer,
        wishList:perisitedWishlistReducer,
        category:categoryReducer
        

    }

})