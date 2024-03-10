import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItem:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartItem:(state, action)=>{
            
            if(action.payload.selectedsize){
                const product = state.cartItem.find(item=>item.id===action.payload.id && item.selectedsize===action.payload.selectedsize)
                if(product){
                    product.quantity += action.payload.quantity;

                }else{
                    state.cartItem.push(action.payload);

                }
            }else{
                const existingItem = state.cartItem.find(item=>item.id===action.payload.id)
                if(existingItem){
                    existingItem.quantity += action.payload.quantity;

                }else{
                    state.cartItem.push(action.payload);

                }
            }
        },
        deleteCartItem:(state, action)=>{
            const itemIndex = state.cartItem.findIndex(item=>item.id===action.payload.id)

            state.cartItem.splice(itemIndex, 1)

        },
        emptyCart: (state) => {
            state.cartItem = []; // Reset cartItem to an empty array
          }

        
    }
})
export const {setCartItem, deleteCartItem, emptyCart} = cartSlice.actions
export default cartSlice.reducer