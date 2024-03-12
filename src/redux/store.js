import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import productReducer from './product/productSlice'
import cartReducer from './cart/cartSlice'
import wishlistReducer  from './wishlist/wishlistSlice'
import storage from 'redux-persist/lib/storage'; 
import persistReducer from 'redux-persist/es/persistReducer'
import categoryReducer from './category/categorySlice'
import orderReducer from './orderSlice'
import reviewReducer from './review/reviewSlice'

const persistConfig = {
    key: 'root',
    storage,
  };
  const persistAuthReducer = persistReducer(persistConfig, authReducer)
  const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  const perisitedWishlistReducer = persistReducer(persistConfig, wishlistReducer )
export const store = configureStore({
    reducer:{
        auth:persistAuthReducer,
        product:productReducer,
        cart:persistedCartReducer,
        wishList:perisitedWishlistReducer,
        category:categoryReducer,
        order:orderReducer,
        review:reviewReducer
        

    }

})