import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
    const img = [
        
        {
            url:'https://allyfashion.com/cdn/shop/files/Homepage_Desktop_NEW_copy_a861e730-ae03-4864-a398-1cae7bf4b05b_1900x.jpg?v=1709250334',
            navigate:'/category/women clothing',
            name:'beauty '
        },
        {
            url:'https://kyliecosmetics.com/cdn/shop/files/0307_Fragrance_Desktop_find-your-fit_1728x600-ratio.jpg?crop=center&height=1077&v=1709659207&width=1920',
            navigate:'/category/beauty products',
            name:'fragnanc'
        },
        {
            url:"https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
            navigate:'/category/beauty products',
            name:'beauty product'
        },
        
    ]
  return (
    <>
    <Container sx={{marginTop:'5vh'}} maxWidth="xl">

    
      <Swiper navigation={true} modules={[Navigation, Autoplay]} // Include the Autoplay module
        autoplay={{ delay: 3000 }} className="mySwiper">
            {
                img.map(image=>{
                    return <SwiperSlide key={image.name}>
                    <Link to={image.navigate}>
                    <Box 
                    sx={{
                        height: '65vh',
                        // display: 'block',
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundImage:`URL(${image.url})`,
                        position:'relative',
                        display:'flex',
                        justifyContent:'center'
                      }}
                    
                    >
                        <Button sx={{
                            position:'absolute',
                            bottom:30

                        }} variant='contained' style={{background:'red', padding:'7px 30px'}}>Shop NOW</Button>
        
                    </Box>
                    </Link>
                </SwiperSlide>
                })
            }
        
        
       
      </Swiper>
      </Container>
    </>
  );
}
