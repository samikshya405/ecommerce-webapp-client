import { Container, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../redux/product/productAction";

const LatestArrival = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4">Latest Arrival</Typography>
      <Grid container spacing={3} my={3}>
        {
          productList.map((product) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={3} xl={1} key={product.id}>
                <Paper sx={{ height: "100%" }}>
                  <ProductCard {...product} />
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default LatestArrival;
