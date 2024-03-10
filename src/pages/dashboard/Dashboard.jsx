import React, { useEffect, useRef } from 'react'
import Header from '../../component/layout/Header'

import LatestArrival from '../../component/product/LatestArrival'
import { useDispatch } from 'react-redux'
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





const Dashboard = () => {
  const dispatch = useDispatch()

  const location = useLocation()
  const isFirstRender = useRef(true);
  useEffect(()=>{
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    const queryParams = new URLSearchParams(location.search);
    
    const redirectStatus = queryParams.get('redirect_status');
    if(redirectStatus==='succeeded'){
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