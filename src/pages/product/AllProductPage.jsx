import React, { useEffect } from "react";
import ClientLayout from "../../component/layout/ClientLayout";
import LatestArrival from "../../component/product/LatestArrival";
import ProductGrid from "../../component/product/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../redux/product/productAction";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const AllProductPage = () => {
  const {productList} = useSelector(state=>state.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductAction());

  },[])
  return (
    <ClientLayout>
      <Container sx={{mt:4}}>
        <Link to='/'>
        <Button sx={{marginBottom:'10px'}}> <ArrowBackIcon/>  Back to home</Button>
        </Link>
        
      <ProductGrid title={'All Product'} productList={productList}/>
 
      </Container>

      
    </ClientLayout>
  );
};

export default AllProductPage;
