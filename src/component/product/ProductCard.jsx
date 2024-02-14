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


export default function ProductCard({ id, URL, productName, price }) {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleAddToCart = (id, e) => {
    e.preventDefault();
    const itemToAdd = productList.find((item) => item.id == id);
    dispatch(setCartItem({ quantity: 1, ...itemToAdd }));
    toast.success(`${itemToAdd.productName} is added to your cart`, {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };
  return (
    <Link to={`/productPage/${id}`}>
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
        className="productCard"
      >
        <CardMedia
          component="img"
          height="194"
          image={URL}
          alt={productName}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography>{productName}</Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography style={{ fontWeight: "600", paddingTop: "10px" }}>
              ${price}
            </Typography>
            <IconButton
              onClick={(e) => handleAddToCart(id, e)}
              style={{ color: "black" }}
            >
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}