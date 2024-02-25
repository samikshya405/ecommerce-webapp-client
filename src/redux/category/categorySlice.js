import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name:'category',
    initialState:{
        categoryList:[],
        selectedCategoryCollection:[]
    },
    reducers:{
        setcategoryList:(state,action)=>{
            state.categoryList = action.payload
        },
        setSelecetedCategoryCollection :(state, action)=>{
            state.selectedCategoryCollection=action.payload
        }
    }
})
export const {setcategoryList, setSelecetedCategoryCollection} = categorySlice.actions
export default categorySlice.reducer