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
            url:'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
            navigate:'/',
            name:'kitchen product'
        },
        {
            url:'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
            navigate:'/',
            name:'beauty product'
        },
        {
            url:'https://m.media-amazon.com/images/I/71EinHErCtL._SX3000_.jpg',
            navigate:'/',
            name:'school product'
        },
        
    ]
  return (
    <>
    <Container sx={{marginTop:'5vh'}}>

    
      <Swiper navigation={true} modules={[Navigation, Autoplay]} // Include the Autoplay module
        autoplay={{ delay: 3000 }} className="mySwiper">
            {
                img.map(image=>{
                    return <SwiperSlide key={image.name}>
                    <Link to={image.navigate}>
                    <Box 
                    sx={{
                        height: '65vh',
                        display: 'block',
                        backgroundSize:'cover',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundImage:`URL(${image.url})`,
                        position:'relative',
                        display:'flex',
                        justifyContent:'center'
                      }}
                    // src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
                    // alt=''
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
