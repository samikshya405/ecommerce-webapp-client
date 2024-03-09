import {
  Box,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteCartItem, setCartItem } from "../../redux/cart/cartSlice";

const CartproductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(item.selectedsize || "");
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
  const handleChangeSize = (e) => {
    setSelectedSize(e.target.value);
    const { selectedsize, ...restInfo } = item;
    dispatch(setCartItem({ selectedsize: selectedSize, ...restInfo }));
  };
  return (
    <Box key={item.id}>
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
            <h3 style={{ textTransform: "capitalize" }}>{item.productName}</h3>

            {item.selectedsize && (
              <>
                <br />

                <Typography>
                  <span style={{ fontWeight: "bold" }}>Size:</span>
                  {selectedSize}
                </Typography>
                <br />
              </>
            )}

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
          <IconButton
            onClick={() => handleDelete(item)}
            style={{ color: "black" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartproductCard;
