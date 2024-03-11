import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientLayout from "../../component/layout/ClientLayout";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import CheckoutProductcart from "../cart/CheckoutProductCart";
import OrderProductCard from "./OrderProductCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getOrderHistory } from "./orderAction";

const OrderHistory = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { orderHistory } = useSelector((state) => state.order);

  const orderArray = [...orderHistory];

  useEffect(() => {
    dispatch(getOrderHistory(userInfo.uid));
  }, []);
  const sortedOrders = orderArray.sort((a, b) => b.orderDate - a.orderDate);


 

  return (
    <ClientLayout>
      <Container maxWidth="lg">
        <h1 style={{ paddingTop: "10vh" }}>Order History</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            {sortedOrders?.map((item, index) => (
              <div key={index}>
                {" "}
                {/* Assuming item doesn't have an id */}
                <Paper
                  sx={{
                    padding: "30px",
                    marginTop: "30px",
                    background: "rgba(245,246,248,255)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginBottom: "20px",
                      textAlign:'center'
                    }}
                  >
                    <Box>
                      <h3>Order Number</h3>
                      <Typography paddingTop={'20px'}>{item.orderNumber}</Typography>
                    </Box>
                    <Box>
                      <h3>Order Date</h3>
                      <Typography paddingTop={'20px'}>{new Date(item.orderDate)
                            .toLocaleString()
                            .slice(0, 10)
                            .replace(",", "")}</Typography>
                    </Box>
                    <Box>
                      <h3>Total Amount</h3>
                      <Typography paddingTop={'20px'}>$89</Typography>
                    </Box>
                  </Box>
                  <hr />
                  {item.orderDetails.map((product, index) => (
                    <div key={product.id}>
                      <OrderProductCard item={product} />
                      <hr />
                    </div>
                  ))}

                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    margin={2}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CheckCircleIcon color="success" />
                      <Typography textTransform={"capitalize"}>
                        {item.status}
                      </Typography>
                    </div>
                    <Button >View Order Details</Button>
                  </Box>
                </Paper>
              </div>
            ))}
          </Grid>

          <Grid item xs={12} md={12} lg={6} xl={6}></Grid>
        </Grid>
      </Container>
    </ClientLayout>
  );
};

export default OrderHistory;
