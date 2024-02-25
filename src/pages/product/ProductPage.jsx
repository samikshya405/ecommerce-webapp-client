import React, { useEffect, useState } from "react";
import ClientLayout from "../../component/layout/ClientLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAction,
  getProductById,
} from "../../redux/product/productAction";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { setCartItem } from "../../redux/cart/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Favorite } from "@mui/icons-material";
import { toast } from "react-toastify";
import { setWishList } from "../../redux/wishlist/wishlistSlice";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);
  const [numberOfItem, setNumberOfItem] = useState(1);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const {wishList} = useSelector(state=>state.wishList)

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getProductAction());
  }, [id]);
  const handleAddToCart = (product) => {
    const productDetails = { ...product, quantity: numberOfItem };

    dispatch(setCartItem(productDetails));
    toast.success(`${product.productName} is added to your cart`, {
      hideProgressBar: true,
      autoClose: 1000,
    });
  };
  const handlePlus = () => {
    setNumberOfItem(numberOfItem + 1);
  };
  const handleMinus = () => {
    if (numberOfItem <= 1) {
      return;
    }
    setNumberOfItem(numberOfItem - 1);
  };
  const handleRemoveWishlist=(product)=>{
    setIsAddedToWishlist(false)
    dispatch(setWishList(product))

  }
  const handleAddWishlist=(product)=>{
    setIsAddedToWishlist(true)
    dispatch(setWishList(product))

  }
  useEffect(()=>{
    const checkProduct = wishList.find(item=>item.id===id)
    if(checkProduct?.id){
      setIsAddedToWishlist(true)

    }else{
      setIsAddedToWishlist(false)
    }

  },[id])

  return (
    <ClientLayout>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px" }}
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img style={{ width: "70%" }} src={selectedProduct.image} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h2>{selectedProduct.productName}</h2>
            <Typography>
              <span style={{ fontWeight: "600" }}>Description: </span>
              {selectedProduct.description}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "600" }}>Price: </span>$
              {selectedProduct.price}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "600" }}>Quantity </span>
              {numberOfItem <= 1 ? (
                <IconButton disabled>
                  <RemoveIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleMinus}>
                  <RemoveIcon />
                </IconButton>
              )}

              <IconButton>{numberOfItem}</IconButton>
              <IconButton onClick={handlePlus}>
                <AddIcon />
              </IconButton>
            </Typography>

            <div>
              <Button
                variant="contained"
                style={{
                  background: "black",
                  width: "70%",
                  padding: "10px 0px",
                }}
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </Button>
              {isAddedToWishlist ? (
                <IconButton onClick={()=>handleRemoveWishlist(selectedProduct)}>
                  <Favorite style={{ fontSize: "50px", color: "black" }} />
                </IconButton>
              ) : (
                <IconButton onClick={()=>handleAddWishlist(selectedProduct)}>
                  <FavoriteBorderIcon style={{ fontSize: "50px" }} />
                </IconButton>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </ClientLayout>
  );
};

export default ProductPage;
