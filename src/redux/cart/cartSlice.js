import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItem:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartItem:(state, action)=>{
            const existingItem = state.cartItem.find(item=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity += action.payload.quantity
            }else{
                state.cartItem.push(action.payload)
            }
        },
        deleteCartItem:(state, action)=>{
            const itemIndex = state.cartItem.findIndex(item=>item.id===action.payload.id)

            state.cartItem.splice(itemIndex, 1)

        }

        
    }
})
export const {setCartItem, deleteCartItem} = cartSlice.actions
export default cartSlice.reducer