import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubCategory,
  getCategoryAction,
  getCategorySubCollection,
} from "../../redux/category/categoryAction";
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  const { categoryList, subCategorylist } = useSelector(
    (state) => state.category
  );

  const subCat = subCategorylist.filter(
    (item) =>
      item.name === "tops" ||
      item.name === "dresses" ||
      item.name === "fragnance" ||
      item.name === "women bags"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);
  useEffect(() => {
    if (categoryList) {
      // Dispatch an action to fetch all subcategories based on categoryList

      dispatch(getAllSubCategory(categoryList));
    }
  }, [categoryList]);
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={5}>
        {categoryList.map((category) => {
          return (
            <Grid key={category.id} item xs={3} sm={3} md={2.4} lg={2.4} xl={2}>
              <Link to={`/category/${category.name}`}>
                <Paper className="cat"
                  sx={{
                    width: "100%",
                   
                    height: 0,
                    paddingBottom: "100%", // Set height to match width to make it a perfect square
                    borderRadius: "50%",
                    overflow: "hidden",
                   
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      // height:'100%',

                      objectFit: "contain",
                    }}
                    src={category.categoryImage}
                    alt="no image"
                  />
                </Paper>
                <Typography
                  textAlign={"center"}
                  textTransform={"capitalize"}
                  mt={2}
                >
                  {category.name}
                </Typography>
              </Link>
            </Grid>
          );
        })}
        {subCat.map((category) => {
          return (
            <Grid key={category.id} item xs={3} sm={3} md={2.4} lg={2.4} xl={2}>
              <Link to={`/category/${category.name}`}>
                <Paper
                  sx={{
                    width: "100%",
                    borderRadius: "50%",
                    height: 0,
                    paddingBottom: "100%", // Set height to match width to make it a perfect square
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      // height:'100%',

                      objectFit: "contain",
                    }}
                    src={category.categoryImage}
                    alt="no image"
                  />
                </Paper>
                <Typography
                  textAlign={"center"}
                  textTransform={"capitalize"}
                  mt={2}
                >
                  {category.name}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryBanner;
