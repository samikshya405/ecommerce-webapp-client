import React, { useState } from "react";
import ClientLayout from "../../component/layout/ClientLayout";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartproductCard from "./CartproductCard";
import EmptyCart from "./EmptyCart";
import Footer from "../../component/layout/Footer";
import CartHeader from "./CartHeader";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const subTotal = cartItem.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  return (
    <ClientLayout>
    
      <Container maxWidth="lg" sx={{ marginTop: "10vh" }}>
        {cartItem.length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Stack spacing={3}>
                {cartItem.map((item, index) => {
                  return <CartproductCard key={item.id + index} item={item} />;
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
                  <h3 style={{ textAlign: "end" }}>
                    Grand Total: AU{subTotal + 2.98}
                  </h3>
                  <Typography align="right">Incl gst</Typography>
                  <Box align="right">
                    {userInfo.uid ? (
                      <Link to="/checkout">
                        <Button
                          variant="contained"
                          style={{ background: "black" }}
                        >
                          Checkout Now
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/login" state={{ path: "/cart" }}>
                        <Button
                          variant="contained"
                          style={{ background: "black", padding: "10px 20px" }}
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                    )}
                  </Box>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <EmptyCart />
        )}
      </Container>
   
    </ClientLayout>
  );
};

export default Cart;
