import React, { useState } from 'react';
// import {
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Rating,
//   Snackbar,
// } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';
import { Box, Button, Rating, Snackbar, TextField, Typography } from '@mui/material';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') {
      setOpenSnackbar(true);
      return;
    }
    // onSubmit({ rating, comment });
    console.log("Review Submitted:", { rating, comment }); // Logging the submitted review
    setRating(0);
    setComment('');
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
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
          style={{ marginTop: '16px' }}
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
  );
};

export default ReviewForm;
