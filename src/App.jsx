import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'

import Signup from './auth/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import ProductPage from './pages/product/ProductPage'
import ScrollToTop from './component/ScrollBehaviuor/ScrollToTop'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'




const App = () => {
  return (
    <>
    <ScrollToTop/>
    
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/signup' element= {<Signup/>}/>
      <Route path='/productPage/:id' element={<ProductPage/>}/>
      <Route path ='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
    
    </>
  )
}

export default App