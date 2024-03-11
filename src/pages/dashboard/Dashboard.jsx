import React, { useEffect, useRef } from 'react'
import Header from '../../component/layout/Header'

import LatestArrival from '../../component/product/LatestArrival'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../../redux/product/productAction'
import BannerOne from './BannerOne'
import TopSelling from './TopSelling'
import BannerTwo from './BannerTwo'
import Footer from '../../component/layout/Footer'
import Hero from './Hero'
import CategoryBanner from '../../component/categories/CategoryBanner'
import ClientLayout from '../../component/layout/ClientLayout'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { emptyCart } from '../../redux/cart/cartSlice'
import SuccessNotification from '../cart/SuccessNotification'
import { getOrderHistory, sendOrder } from '../order/orderAction'





const Dashboard = () => {
  const dispatch = useDispatch()
  const {cartItem} = useSelector(state=>state.cart)
  const {userInfo} = useSelector(state=>state.auth)
  const totalPrice = cartItem.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0) + 2.98

  const location = useLocation()
  useEffect(()=>{
    
    const queryParams = new URLSearchParams(location.search);
    
    const redirectStatus = queryParams.get('redirect_status');
    if(redirectStatus==='succeeded'){
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        

        const timestamp = Date.now().toString();
       
        
        
      if(cartItem.length>0){
        const docData ={
          userId :userInfo.uid,
          status:'processing',
          orderDetails:cartItem,
          totalPrice,
          orderNumber:timestamp,
          orderDate:Date.now()
          
        }
        dispatch(sendOrder(docData))
        
      }

      dispatch(emptyCart())
      console.log('cart is going to be emptied')
      toast.success(<SuccessNotification orderNumber={'123243434344'} />, {
        position: 'top-center' // Position the toast in the center
      });
      

    }else{
      console.log('cart is not emptyed')
    }

    
    

  },[])
  useEffect(()=>{
    dispatch(getProductAction())
   dispatch(getOrderHistory(userInfo.uid))
   console.log(userInfo.uid)

  },[dispatch])
  
  return (
    <>
    <ClientLayout>
    
    
   <Hero/>
   <CategoryBanner/>
    <LatestArrival/>
    <BannerOne/>
    <TopSelling/>
    <BannerTwo/>

    </ClientLayout>
    

    </>
  )
}

export default Dashboard