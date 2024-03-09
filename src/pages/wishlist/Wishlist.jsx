import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientLayout from "../../component/layout/ClientLayout";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setCartItem } from "../../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { deleteWishListItem } from "../../redux/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import EmptyWishList from "./EmptyWishList";

const Wishlist = () => {
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch()
  // const [noOfItem, setNoOfItem] = useState(1);
  const handleDelete = (item) => {
    dispatch(deleteWishListItem(item))
  };
  // const handlePlus = (item) => {
  //   setNoOfItem(noOfItem+1)
  // };
  // const handleMinus = (item) => {
  //   setNoOfItem(noOfItem-1)
  // };
  const handleAdd = (item) => {
    dispatch(setCartItem({ quantity: 1, ...item }));
    toast.success(`${item.productName} is added to your cart`, {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };
  return (
    <ClientLayout>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        {wishList.length > 0 ? (
          <Stack spacing={3}>
            <h1>WishList</h1>
            <Typography>Save a list of things you want to buy later</Typography>
            {wishList.map((item) => {
              return (
                <Paper key={item.id}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={2}
                  >
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                      <IconButton
                        style={{ color: "black" }}
                        onClick={() => handleDelete(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Link to={`/productPage/${item.id}`}>
                      <img width={"100px"} src={item.image} alt={item.productName} />
                      </Link>
                      

                      <Box>
                        <h3 style={{textTransform:'capitalize'}}>{item.productName}</h3>
                        
                      </Box>
                    </Box>
                    <Box>
                      <Typography marginBottom={2}>${item.price}</Typography>
                      <IconButton
                        style={{ color: "black", fontSize: "45px" }}
                        onClick={() => handleAdd(item)}
                      >
                        <ShoppingCartCheckoutIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              );
            })}
          </Stack>
        ) : (
          <EmptyWishList/>
        )}
      </Container>
    </ClientLayout>
  );
};

export default Wishlist;
