import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ title, productList }) => {
  return (
    <>
      <Typography variant="h4" textTransform={"capitalize"}>
        {title}
      </Typography>
      {productList.length <= 0 ? (
        <Typography variant="h5" paddingTop={2}>
          No Product Found{" "}
        </Typography>
      ) : (
        <Grid container spacing={3} my={3}>
          {productList.map((product) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={3} xl={1} key={product.id}>
                <Paper sx={{ height: "100%" }}>
                  <ProductCard {...product} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ProductGrid;
