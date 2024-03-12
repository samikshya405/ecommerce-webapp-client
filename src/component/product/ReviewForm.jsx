import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Rating,
//   Snackbar,
// } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';
import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getAllproductReview,
} from "../../redux/review/reviewAction";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ReviewForm = ({ selectedProduct }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const {allProductReview} = useSelector((state=>state.review))
  const [productReview, setproductReview] = useState([])
  const additionReview =[
    {
      userName:'Aliza',
      rating:4,
      comment:'It is beautiful and light weight',
      created:'12/3/2020'
    },
    {
      userName:'john',
      rating:4,
      comment:'I love it, great quality',
      created:'12/3/2020'
    },

  ]
  const allReview = productReview.concat(additionReview)
  console.log(allReview)

  const initialReviewsToShow = 3; // Number of reviews to show initially
  const [showAllReviews, setShowAllReviews] = useState(false);
  
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllproductReview())
  },[dispatch])
  useEffect(()=>{
    if(allProductReview && allProductReview.length>0){
      setproductReview(allProductReview.filter(review=>review.productId===selectedProduct.id))
    }
  },[allProductReview,selectedProduct])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      setOpenSnackbar(true);
      return;
    }
   

    const docData = {
      productId: selectedProduct.id,
      userId: userInfo.uid,
      userName: userInfo.fullName,
      productName: selectedProduct.productName,
      productImage: selectedProduct.image,
      rating,
      comment,
      date: Date.now(),
    };
    
    dispatch(addReview(docData));
    dispatch(getAllproductReview());
    setRating(0);
    setComment("");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
    <Grid item xs={12} sm={12} md={6} lg={6}>
    <Box>
      <Typography variant="h5" gutterBottom>
        Add a Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <TextField
          id="comment"
          label="Your Comment"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Please provide both rating and comment.
        </Alert>
      </Snackbar>

     
    </Box>
          

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" gutterBottom>
        All Customers Review
      </Typography>
      {allReview
        ?.slice(0, showAllReviews ? allReview.length : initialReviewsToShow)
        .map((review, index) => (
          <Paper key={index} sx={{ padding: "10px", marginBottom: "10px" }}>
            <Typography textTransform={'capitalize'}>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                {review?.userName}
              </span>{" "}
              {
                review.date ? new Date(review.date).toLocaleDateString() : review.created
              }
              

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
     

          </Grid>
    </>
    
  );
};

export default ReviewForm;
