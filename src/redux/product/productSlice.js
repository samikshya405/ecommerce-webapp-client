import { createSlice } from "@reduxjs/toolkit";

export const productSlice= createSlice({
    name:'product',
    initialState:{
        productList:[],
        selectedProduct:{}
    },
    reducers:{
        setProductList:(state,action)=>{
            state.productList = action.payload
        },
        setSelectedProduct:(state,action)=>{
            state.selectedProduct=action.payload
        }
    }

})
export const {setProductList, setSelectedProduct} = productSlice.actions
export default productSlice.reducer