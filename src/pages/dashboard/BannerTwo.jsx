import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const BannerTwo = () => {
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
            style={{ height: "400px", maxHeight: "50vh" }}
          >
            <img
              src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="img"
              style={{ height: "100%",width:'100%' ,objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>New year, new home range</h1>
            <h4>
              Style your home, your way with our latest range of décor,
              furniture, and more. All at our famously low prices.
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
          
        </Grid>
      </Container>
    </div>
  );
};

export default BannerTwo;
