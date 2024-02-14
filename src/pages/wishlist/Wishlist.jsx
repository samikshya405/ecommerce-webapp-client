import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ClientLayout from "../../component/layout/ClientLayout";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Wishlist = () => {
  const { wishList } = useSelector((state) => state.wishList);
  const handleDelete = (item)=>{

  }
  return (
    <ClientLayout>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        {wishList.length > 0 ? (
          <Stack spacing={3}>
            <h1>WishList</h1>
            <Typography>Save a list of things you want to buy later</Typography>
            {wishList.map((item) => {
              return (
                <Paper key={item.id}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={2}
                  >
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                      <IconButton style={{color:'black'}} onClick={()=>handleDelete(item)}>
                        <DeleteIcon />
                      </IconButton>
                      <img width={"100px"} src={item.URL} alt="" />

                      <Box>
                        <h3>{item.productName}</h3>
                        <Box
                          border={1}
                          display="inline-block"
                          borderRadius={1}
                          marginTop={2}
                        >
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                          <IconButton>1</IconButton>
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography marginBottom={2}>${item.price}</Typography>
                      <IconButton style={{color:'black', fontSize:'45px'}} onClick={()=>handleAdd(item)}>
                        <ShoppingCartCheckoutIcon/>
                      </IconButton>
                      
                    </Box>
                  </Box>
                </Paper>
              );
            })}
          </Stack>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </Container>
    </ClientLayout>
  );
};

export default Wishlist;
