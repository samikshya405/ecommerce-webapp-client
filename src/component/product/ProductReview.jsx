import React, { useState } from "react";
import { Paper, Rating, Typography, Button } from "@mui/material";

const ProductReview = () => {
  const initialReviewsToShow = 3; // Number of reviews to show initially
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const reviews = [
    {
      name: "Aliza",
      date: "30 dec 2023",
      rating: 3,
      comment:
        "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
    },
    {
        name: "Aliza",
        date: "30 dec 2023",
        rating: 3,
        comment:
          "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
      },{
        name: "Aliza",
        date: "30 dec 2023",
        rating: 3,
        comment:
          "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
      },{
        name: "Aliza",
        date: "30 dec 2023",
        rating: 3,
        comment:
          "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
      },{
        name: "Aliza",
        date: "30 dec 2023",
        rating: 3,
        comment:
          "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
      },{
        name: "Aliza",
        date: "30 dec 2023",
        rating: 3,
        comment:
          "It’s very nice I like it very much and I highly recommend it you should all buy it it’s so practical",
      },
    // Add more reviews as needed
  ];

  return (
    <>
      {reviews.slice(0, showAllReviews ? reviews.length : initialReviewsToShow).map((review, index) => (
        <Paper key={index} sx={{ padding: "10px", marginBottom: "10px" }}>
          <Typography>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>{review.name}</span> {review.date}
          </Typography>
          <Rating name="rating" value={review.rating} />
          <Typography>{review.comment}</Typography>
        </Paper>
      ))}
      {reviews.length > initialReviewsToShow && (
        <Button onClick={() => setShowAllReviews(!showAllReviews)}>
          {showAllReviews ? "See less" : "See more"}
        </Button>
      )}
    </>
  );
};

export default ProductReview;
