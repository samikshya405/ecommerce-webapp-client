import React, { useEffect, useState } from "react";
import ClientLayout from "../../component/layout/ClientLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAction,
  getProductById,
} from "../../redux/product/productAction";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { setCartItem } from "../../redux/cart/cartSlice";

import { Favorite } from "@mui/icons-material";
import { toast } from "react-toastify";
import { setWishList } from "../../redux/wishlist/wishlistSlice";
import ProdImageCarousel from "../../component/product/ProdImageCarousel";
import LatestArrival from "../../component/product/LatestArrival";
import RelatedProduct from "../../component/product/RelatedProduct";
import ReviewForm from "../../component/product/ReviewForm";
import ProductReview from "../../component/product/ProductReview";


const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [numberOfItem, setNumberOfItem] = useState(1);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const { wishList } = useSelector((state) => state.wishList);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedImage, setselecetedImage] = useState(selectedProduct.image)

  useEffect(() => {
   
    dispatch(getProductAction());
  }, [id]);
  
  useEffect(()=>{
    if (productList && productList.length > 0) {
      setSelectedProduct(productList.find(item => item.id === id));
    }


  },[productList])
  useEffect(() => {
    if (selectedProduct) {
      setselecetedImage(selectedProduct.image);
    }
  }, [selectedProduct]);
  const handleImageChange=(image)=>{
    setselecetedImage(image)
  }
  
  const handleAddToCart = (product, size) => {
    const productDetails = {
      ...product,
      quantity: numberOfItem,
      selectedsize: size,
    };

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
  const handleRemoveWishlist = (product) => {
    setIsAddedToWishlist(false);
    dispatch(setWishList(product));
  };
  const handleAddWishlist = (product) => {
    setIsAddedToWishlist(true);
    dispatch(setWishList(product));
  };
  const handleSizeSelecteion = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    const checkProduct = wishList.find((item) => item.id === id);
    if (checkProduct?.id) {
      setIsAddedToWishlist(true);
    } else {
      setIsAddedToWishlist(false);
    }
  }, [id]);

  return (
    <ClientLayout>
      <Container maxWidth="lg" >
        
        <Grid
          container 
          // spacing={2}
          style={{ marginTop: "20px" }}
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* <ProdImageCarousel/> */}
            <img style={{ width: "70%" }} src={selectedImage} alt="" />
            <Grid container gap={2}>
              <Grid item onClick={()=>handleImageChange(selectedProduct.image)} >
              <img className="productImage"  width={'100px'} src={selectedProduct.image} alt=''/>


              </Grid>
              {
                selectedProduct.optionalImages?.map((image,index)=>{
                  return <Grid key={index} item onClick={()=>handleImageChange(image)} >
                  <img className="productImage"  width={'100px'} src={image} alt=''/>
    
    
                  </Grid>
                })
              }
              
              
            </Grid>
          </Grid>
          <Grid item
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
            {selectedProduct.sizes && (
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                {" "}
                <Typography style={{ fontWeight: "600" }}>Size:</Typography>
                <Stack direction={"row"} spacing={2}>
                  {selectedProduct.sizes.map((item) => {
                    return (
                      <Button
                        key={item.size}
                        style={{
                          borderColor: "black",
                          color:
                            selectedSize === item.size ? "white" : "inherit",
                          backgroundColor:
                            selectedSize === item.size ? "black" : "inherit",
                        }}
                        variant="outlined"
                        onClick={() => handleSizeSelecteion(item.size)}
                      >
                        {item.size}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            )}
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
              {selectedProduct.sizes ? (
                selectedSize ? (
                  <Button
                    variant="contained"
                    style={{
                      background: "black",
                      width: "70%",
                      padding: "10px 0px",
                    }}
                    onClick={() =>
                      handleAddToCart(selectedProduct, selectedSize)
                    }
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
                )
              ) : (
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
              )}

              {isAddedToWishlist ? (
                <IconButton
                  onClick={() => handleRemoveWishlist(selectedProduct)}
                >
                  <Favorite style={{ fontSize: "50px", color: "black" }} />
                </IconButton>
              ) : (
                <IconButton onClick={() => handleAddWishlist(selectedProduct)}>
                  <FavoriteBorderIcon style={{ fontSize: "50px" }} />
                </IconButton>
              )}
            </div>
          </Grid>
          
        </Grid>
        <Typography variant="h4" pt={2}>Reviews</Typography>
        <Grid container spacing={3} my={1}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ReviewForm/>

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" gutterBottom>
        All Customers Review
      </Typography>
      <ProductReview/>

          </Grid>

        </Grid>
        {/* <LatestArrival/> */}
        
        {/* <RelatedProduct id={selectedProduct.subcategory} /> */}
      </Container>
    </ClientLayout>
  );
};

export default ProductPage;
