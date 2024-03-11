import React from 'react'
import ClientLayout from '../../component/layout/ClientLayout'
import { Box, Button, Grid, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItem } from '../../redux/cart/cartSlice'
import { toast } from 'react-toastify'

const OrderProductCard = ({item}) => {
    const {productList} = useSelector(state=>state.product)
    const dispatch = useDispatch()
    const handleRepurchase=(item)=>{
        const itemToAdd = productList.find((prod) => prod.id == item.id);
        // const {id:productId,category,subcategory,productName,}
    
        dispatch(setCartItem({ quantity: 1, ...itemToAdd }));
        toast.success(`${itemToAdd.productName} is added to your cart`, {
          autoClose: 1000,
          hideProgressBar: true,
        });
    }
  return (
    
  <Box sx={{display:'flex', justifyContent:'space-between', paddingBottom:'20px', paddingTop:'20px'}} >
    <Box sx={{display:'flex',gap:'10px'}}>
        <img width={'100px'} src={item.image} alt=''/>
        <Box sx={{display:'flex', flexDirection:'column',gap:'10px'}}>
        <h3>{item.productName}</h3>
        <p>Qty:{item.quantity}</p>
        {
            item.selectedsize &&
            <p>Size:{item.selectedsize}</p>

        }
        
    </Box>

    </Box>
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
    <Box>
        <h4>${item.price*item.quantity}</h4>
        {
            item.quantity>1 &&
            <p>${item.price}(each)</p>
        }
        
    </Box>
    <Button sx={{textTransform:'capitalize'}} variant='outlined' onClick={()=>handleRepurchase(item)}>Re-purchase</Button>
    </Box>
  </Box>
  )
}

export default OrderProductCard