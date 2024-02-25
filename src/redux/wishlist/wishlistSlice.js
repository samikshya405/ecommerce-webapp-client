import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name:'wishlist',
    initialState:{
        wishList:[]
    },
    reducers:{
        setWishList:(state, action)=>{
            const existingItemIndex = state.wishList.findIndex(item=>item.id===action.payload.id)
            if(existingItemIndex>=0){
                state.wishList.splice(existingItemIndex,1)

            }else{
                state.wishList.push(action.payload)

            }
            
        },
        deleteWishListItem:(state, action)=>{
            const itemIndex = state.wishList.findIndex(item=>item.id==action.payload.id)
            state.wishList.splice(itemIndex,1)
            
        }
    }
})
export const {setWishList, deleteWishListItem} = wishListSlice.actions
export default wishListSlice.reducer