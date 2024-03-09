import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import emptyWishlist from '../../assets/img/emptywishlist.png'

const EmptyWishList = () => {
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Box>
        <img width={'300px'} src={emptyWishlist} alt=''/>
        <h1>Nothing in your wishlist</h1>
        <Box textAlign={'center'} padding={2}>
        <Link to='/allProduct'>
        <Button variant='contained' style={{background:'black'}} >Keep Browsing</Button>
        </Link>
        </Box>
            
        </Box>
        
        
    </Box>
  )
}

export default EmptyWishList