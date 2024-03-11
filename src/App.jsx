import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";

import Signup from "./auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductPage from "./pages/product/ProductPage";
import ScrollToTop from "./component/ScrollBehaviuor/ScrollToTop";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import AllProductPage from "./pages/product/AllProductPage";
import CategoryPage from "./pages/product/CategoryPage";
import Checkout from "./pages/cart/Checkout";
import PrivateRoute from "./privateRoute/PrivateRoute";
import OrderHistory from "./pages/order/OrderHistory";
import SubCategoryPage from "./pages/category/SubCategoryPage";
// import OrderHistory from "./pages/order/OrderHistory";
// import OrderHistory from "./pages/order/OrderHistory";


const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/cartCheckOut" element={<CartCheckOutForm />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/allProduct" element={<AllProductPage />} />
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path='/subCategory/:id' element={<SubCategoryPage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
       
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path="/orderHistory" element={<OrderHistory/>}/>
        

      </Routes>
    </>
  );
};

export default App;
