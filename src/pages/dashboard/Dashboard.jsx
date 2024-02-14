import React, { useEffect } from 'react'
import Header from '../../component/layout/Header'

import LatestArrival from '../../component/product/LatestArrival'
import { useDispatch } from 'react-redux'
import { getProductAction } from '../../redux/product/productAction'
import BannerOne from './BannerOne'
import TopSelling from './TopSelling'
import BannerTwo from './BannerTwo'
import Footer from '../../component/layout/Footer'
import Hero from './Hero'





const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductAction())

  },[dispatch])
  return (
    <>
    <Header/>
    
   <Hero/>
    <LatestArrival/>
    <BannerOne/>
    <TopSelling/>
    <BannerTwo/>

    <Footer/>
    

    </>
  )
}

export default Dashboard