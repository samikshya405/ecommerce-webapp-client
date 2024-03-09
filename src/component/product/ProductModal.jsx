import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { setCartItem } from "../../redux/cart/cartSlice";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const ProductModal = ({ open, setOpen, handleClose, id }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const { productList } = useSelector((state) => state.product);
  const product = productList.find((item) => item.id === id);
  const dispatch = useDispatch();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    const productDetails = {
      ...product,
      quantity: 1,
      selectedsize: selectedSize,
    };

    dispatch(setCartItem(productDetails));
    toast.success(`${product.productName} is added to your cart`, {
      hideProgressBar: true,
      autoClose: 1000,
    });
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack gap={2} sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textTransform={"capitalize"}
          >
            {product.productName}
          </Typography>
          <Stack direction={"row"} spacing={2}>
            {product.sizes?.map((sizeStock) => {
              return (
                <Button
                  key={sizeStock.size}
                  variant="outlined"
                  style={{
                    borderColor: "black",
                    color:
                      selectedSize === sizeStock.size ? "white" : "inherit",
                    backgroundColor:
                      selectedSize === sizeStock.size ? "black" : "inherit",
                  }}
                  onClick={() => handleSizeSelection(sizeStock.size)}
                >
                  {sizeStock.size}
                </Button>
              );
            })}
          </Stack>
          <Link to={`/productPage/${id}`}>View Product Details </Link>
          {selectedSize ? (
            <Button
              variant="contained"
              style={{
                background: "black",
                width: "70%",
                padding: "10px 0px",
              }}
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              disabled
              variant="contained"
              style={{
                width: "70%",
                padding: "10px 0px",
              }}
            >
              select size
            </Button>
          )}
        </Stack>
      </Modal>
    </>
  );
};

export default ProductModal;
