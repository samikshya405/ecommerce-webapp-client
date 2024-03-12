import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name:'review',
    initialState:{
        allProductReview:[],
        selectedProductReview:[]
    },
    reducers:{
        setAllProductReview:(state,action)=>{
            state.allProductReview=action.payload
        }
        ,
        setSelectedProductReview:(state,action)=>{
            state.selectedProductReview=action.payload
        }
    }
})

export const {setAllProductReview,setSelectedProductReview} = reviewSlice.actions
export default reviewSlice.reducer