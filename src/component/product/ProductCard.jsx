import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../redux/cart/cartSlice";
import { toast } from "react-toastify";
import ProductModal from "./ProductModal";
import styled from "@emotion/styled";

export default function ProductCard({ id, image, productName, price, sizes }) {
  const { productList } = useSelector((state) => state.product);
  const product = productList.find((item) => item.id === id);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleAddToCart = (id, e) => {
    e.preventDefault();
    const itemToAdd = productList.find((item) => item.id == id);
    // const {id:productId,category,subcategory,productName,}

    dispatch(setCartItem({ quantity: 1, ...itemToAdd }));
    toast.success(`${itemToAdd.productName} is added to your cart`, {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };
  return (
    <>
      <Link to={`/productPage/${id}`}>
        <Card
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
          className="productCard"
        >
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={productName}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography textTransform={"capitalize"} sx={{
              whiteSpace: 'nowrap', 
              overflow: 'hidden',
              textOverflow: 'ellipsis', 
              
            }}>{productName}</Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography style={{ fontWeight: "600", paddingTop: "10px" }}>
                ${price}
              </Typography>
              {sizes ? (
                <>
                  <IconButton style={{ color: "black" }} onClick={handleOpen}>
                    <ShoppingBagIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={(e) => handleAddToCart(id, e)}
                  style={{ color: "black" }}
                >
                  <ShoppingBagIcon />
                </IconButton>
              )}
            </Box>
          </CardContent>
        </Card>
      </Link>
      <ProductModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        id={id}
      />
    </>
  );
}
