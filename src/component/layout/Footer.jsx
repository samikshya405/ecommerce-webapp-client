import { Box, Container, Typography } from "@mui/material";
import React from "react";
import am from "../../assets/img/am.png";
import visa from "../../assets/img/visa.png";
import flypay from "../../assets/img/flypay.png";
import ms from "../../assets/img/ms.png";
import paypal from "../../assets/img/paypal.png";
import zip from "../../assets/img/zip.png";
import afterpay from "../../assets/img/afterpay.png";
import applepay from "../../assets/img/applepay.png";
const img = [visa, ms, am, applepay, flypay, paypal, zip, afterpay];
const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",

            height: "15vh",
            

            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {img.map((image) => {
            return (
              <div
                key={image}
                style={{
                  width: "70px",
                  height: "80px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    display: "flex",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </Container>
      <Box
        sx={{
          height: "10vh",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography>Made with Love || Copyright 2024</Typography>
      </Box>
    </>
  );
};

export default Footer;
