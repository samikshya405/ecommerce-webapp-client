import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const BannerOne = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "65vh",
        marginTop: "30px",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "10px" }}>
        <Grid container spacing={4} mt={4} sx={{ alignItems: "center" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>Unlock Your Beauty Potential</h1>
            <h4>
            Revamp your skincare and makeup routine with our latest range of beauty products, including skincare essentials, makeup must-haves, and more. Discover high-quality products at unbeatable prices, designed to help you look and feel your best."
            </h4>
            <div>
              <Button
                variant="contained"
                style={{ padding: "10px 30px", background: "black" }}
              >
                Shop Now
              </Button>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{ height: "400px", maxHeight: "50vh" }}
          >
            <img
              src="https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?b=1&s=612x612&w=0&k=20&c=TAn7PO0GwGVQ6zeKyACdroy50orO90AlbxtnECt9Tho="
              alt="img"
              style={{ height: "100%", objectFit: "cover" ,
            width:'100%'}}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BannerOne;
