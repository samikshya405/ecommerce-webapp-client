import { Container, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../redux/product/productAction";
import ProductGrid from "./ProductGrid";

const LatestArrival = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  return (
    <Container sx={{mt:4}}>
      <ProductGrid title={'Latest Arrival'} productList={productList}/>

    </Container>
    
  );
};

export default LatestArrival;
