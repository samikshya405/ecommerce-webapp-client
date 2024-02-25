import React from "react";
import ClientLayout from "../../component/layout/ClientLayout";
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
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, setCartItem } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlePlus = (item) => {
    const { quantity, ...restInfo } = item;
    dispatch(
      setCartItem({
        quantity: 1,
        ...restInfo,
      })
    );
  };
  const handleMinus = (item) => {
    const { quantity, ...restInfo } = item;
    dispatch(
      setCartItem({
        quantity: -1,
        ...restInfo,
      })
    );
  };
  const handleDelete = (item) => {
    dispatch(deleteCartItem(item));
  };
  const subTotal = cartItem.reduce((a,b)=>{
    return a + (b.price*b.quantity)
  },0)

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ marginTop: "10vh" }}>
        {cartItem.length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Stack spacing={3}>
                {cartItem.map((item) => {
                  return (
                    <Paper key={item.id}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        padding={2}
                      >
                        <Box display={"flex"} gap={2} alignItems={"center"}>
                          <Link to={`/productPage/${item.id}`}>
                          <img width={"100px"} src={item.image} alt="" />
                          </Link>

                          <Box>
                            <h3>{item.productName}</h3>
                            <Box
                              border={1}
                              display="inline-block"
                              borderRadius={1}
                              marginTop={2}
                            >
                              {item.quantity == 1 ? (
                                <IconButton disabled>
                                  <RemoveIcon />
                                </IconButton>
                              ) : (
                                <IconButton onClick={() => handleMinus(item)}>
                                  <RemoveIcon />
                                </IconButton>
                              )}

                              <IconButton>{item.quantity}</IconButton>
                              <IconButton onClick={() => handlePlus(item)}>
                                <AddIcon />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                        <Box>
                          <Typography marginBottom={2}>
                            ${item.price * item.quantity}
                          </Typography>
                          <IconButton onClick={() => handleDelete(item)} style={{ color: "black" }}>
                            <DeleteIcon/>
                          </IconButton>
                          
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Stack spacing={3}>
                <Paper
                  sx={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h2>Order Summary</h2>

                  <Typography align="right">SubTotal: AU${subTotal}</Typography>
                  <Typography align="right">Shipping fee: AU$2.98</Typography>
                  <h3 style={{ textAlign: "end" }}>Grand Total: AU{subTotal+2.98}</h3>
                  <Typography align="right">Incl gst</Typography>
                  <Typography align="right">
                    <Button
                      variant="contained"
                      style={{ background: "black", padding: "10px 20px" }}
                    >
                      Checkout Now
                    </Button>
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </Container>
    </ClientLayout>
  );
};

export default Cart;
