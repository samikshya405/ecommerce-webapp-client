import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { signOut } from "firebase/auth";
import Searchbar from "../input/Searchbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import HoverDropdown from "../categories/HoverDropdown";
import { auth } from "../../firebase";
import { setUserInfo } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import CategoriesBar from "../categories/CategoriesBar";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getCategoryAction } from "../../redux/category/categoryAction";

const Header = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { categoryList } = useSelector((state) => state.category);
  const { wishList } = useSelector((state) => state.wishList);
  const [searchValue, setSearchValue] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const numberOfItemsincart = cartItem.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSignin = () => {
    navigate("/login");
  };
  const handleUser=()=>{
    navigate('/orderHistory')
  }
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserInfo({}));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    // Implement sign out functionality
    signOut(auth)
      .then(() => {
        dispatch(setUserInfo({}));
      })
      .catch((error) => {
        toast.error(error.message);
      });
      handleClose();
  };

  const handleOrderHistory = () => {
    // Implement order history functionality
    navigate('/orderHistory')
    handleClose();
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
              sx={{ fontSize: "20px", color: "black", fontWeight: "bold" }}
              onClick={() => {
                navigate("/");
              }}
            >
              fashion
            </Button>
          
          </Box>

          

          <Stack direction={"row"} spacing={1}>
            <IconButton
              size="large"
              aria-label="cart"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={numberOfItemsincart} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate("/wishlist")}
            >
              <Badge badgeContent={wishList.length} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            {userInfo.uid ? (
              <Button
                color="inherit"
                sx={{ textTransform: "capitalize" }}
                onClick={handleMenu}
                aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleIcon/>
                
              </Button>
            ) : (
              <Button
                color="inherit"
                sx={{ textTransform: "capitalize" }}
                onClick={handleSignin}
              >
                <PersonIcon />
                login/signup
              </Button>
            )}
             <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleOrderHistory}>Order History</MenuItem>
          <MenuItem onClick={handleSignOut}><LogoutIcon /> Sign out</MenuItem>
        </Menu>
          </Stack>
        </Toolbar>
        <CategoriesBar categories={categoryList} />
      </Container>
    </AppBar>
  );
};

export default Header;
