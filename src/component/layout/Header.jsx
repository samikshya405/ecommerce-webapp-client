import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';
import { signOut } from "firebase/auth";
import Searchbar from "../input/Searchbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import HoverDropdown from "../categories/HoverDropdown";


const Header = () => {
  const dispatch = useDispatch();
  const {cartItem} = useSelector(state=>state.cart)
  const {wishList} = useSelector(state=>state.wishList)
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const numberOfItemsincart =cartItem.reduce((a,b)=>{
    return a + b.quantity
  },0)
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSignin = () => {
    navigate("/login");
  };
  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ fontSize: "20px", color: "black" }}
              onClick={() => {
                navigate("/");
              }}
            >
              shop
            </Button>
            <HoverDropdown />
          </Box>

          <Searchbar placeholder="Search..." onChange={handleSearchChange} />

          <Stack direction={"row"} spacing={1}>
            <IconButton size="large" aria-label="cart" color="inherit" onClick={()=>navigate('/cart')}>
              <Badge badgeContent={numberOfItemsincart} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={()=>navigate('/wishlist')}
            >
              <Badge badgeContent={wishList.length} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>

            <Button color="inherit" sx={{textTransform:'capitalize'}} onClick={handleSignin}>
              <PersonIcon/>
              login
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
