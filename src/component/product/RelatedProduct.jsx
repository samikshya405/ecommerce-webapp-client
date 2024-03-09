import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../redux/product/productAction';
import { Container } from '@mui/material';
import ProductGrid from './ProductGrid';

const RelatedProduct = (category) => {
  const {productList} =useSelector(state=>state.product)
  const dispatch = useDispatch()
  

  const relatedProduct = productList.filter(item=>item.subcategory===category)
  console.log(relatedProduct)
  
  useEffect(()=>{
    dispatch(getProductAction())


  },[])
  return (
    <Container sx={{mt:4}}>
      {
        relatedProduct.length >0 &&
        <ProductGrid title={'Related Products'} productList={relatedProduct}/>


      }

    </Container>
    
  );
}

export default RelatedProduct