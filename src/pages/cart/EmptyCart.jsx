import React from 'react'
import emptycart from '../../assets/img/emptycart.png'
import { Box, Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Box>
        <img width={'300px'} src={emptycart} alt=''/>
        <h1>Your cart is Empty</h1>
        <Box textAlign={'center'} padding={2}>
        <Link to='/allProduct'>
        <Button variant='contained' style={{background:'black'}} >Keep Browsing</Button>
        </Link>
        </Box>
            
        </Box>
        
        
    </Box>
  )
}

export default EmptyCart