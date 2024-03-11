import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name:'order',
    initialState:{
        orderHistory:[]
    },
    reducers:{
        setOrderHistory : (state,action)=>{
            state.orderHistory = action.payload
        }
    }
})
export const {setOrderHistory} = orderSlice.actions
export default orderSlice.reducer