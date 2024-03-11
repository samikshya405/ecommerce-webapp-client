import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../redux/product/productAction';
import { Container } from '@mui/material';
import ProductGrid from './ProductGrid';

const RelatedProduct = (id) => {
  const {productList} =useSelector(state=>state.product)
  const dispatch = useDispatch()
  

  
console.log(id)
  
  useEffect(()=>{
    dispatch(getProductAction())


  },[])
  console.log(productList)
  const relatedProduct = productList.filter(item=>item.subcategory===id)
  console.log(relatedProduct)
  return (
    <Container sx={{mt:4}}>
      {
        productList.length >0 &&
        <ProductGrid title={'Related Products'} productList={productList}/>


      }

    </Container>
    
  );
}

export default RelatedProduct