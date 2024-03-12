import React, { useEffect, useMemo, useState } from "react";
import { Paper, Rating, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllproductReview,
  getSelectedProductReview,
} from "../../redux/review/reviewAction";

const ProductReview = ({ selectedProduct }) => {
  const initialReviewsToShow = 3; // Number of reviews to show initially
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const [allReview, setallReview] = useState([])
  const dispatch = useDispatch();
  const reviewLength = useMemo(() => allProductReview.length, [allProductReview.length]);

  useEffect(() => {
    dispatch(getAllproductReview());
  }, [reviewLength]);
  useEffect(() => {
    if (allProductReview && allProductReview.length > 0) {
      setProductReview(
        allProductReview.filter(
          (review) => review.productid === selectedProduct.id
        )
      );
    }
  }, [allProductReview]);

  console.log(productReview);
  console.log(selectedProduct.id);

  const reviews = [
    {
      name: "sam",
      rating: 3,
      comment: "jhhg",
    },

    // Add more reviews as needed
  ];
  useEffect(()=>{
    if(productReview && productReview.length>0){
      setallReview(productReview.concat(reviews))
    }

  },[productReview])
  

  // const allReview =  [...reviews];
  return (
    <>
      {allReview
        ?.slice(0, showAllReviews ? allReview.length : initialReviewsToShow)
        .map((review, index) => (
          <Paper key={index} sx={{ padding: "10px", marginBottom: "10px" }}>
            <Typography>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                {review?.name}
              </span>{" "}
              {review.date}
            </Typography>
            <Rating name="rating" value={review?.rating} />
            <Typography>{review?.comment}</Typography>
          </Paper>
        ))}
      {allReview.length > initialReviewsToShow && (
        <Button onClick={() => setShowAllReviews(!showAllReviews)}>
          {showAllReviews ? "See less" : "See more"}
        </Button>
      )}
    </>
  );
};

export default ProductReview;
