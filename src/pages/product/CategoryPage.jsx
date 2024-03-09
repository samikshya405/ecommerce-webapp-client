import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../redux/product/productAction';
import ClientLayout from '../../component/layout/ClientLayout';
import { Container, Typography } from '@mui/material';
import ProductGrid from '../../component/product/ProductGrid';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { id } = useParams();
    const {productList} = useSelector(state=>state.product)
    const dispatch = useDispatch()

    const selectedProductList = productList.filter(product=>product.category ===id || product.subcategory ===id)

    useEffect(()=>{
        dispatch(getProductAction())

    },[])
  return (
    <ClientLayout>
        <Container sx={{mt:4}}>
            {
                selectedProductList.length<0 ? (<Typography>No Product Found!</Typography>):(
                    <ProductGrid title={id} productList={selectedProductList}/>

                )
            }
            

        </Container>
    </ClientLayout>
  )
}

export default CategoryPage