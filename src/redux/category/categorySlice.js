import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name:'category',
    initialState:{
        categoryList:[],
        selectedCategoryCollection:[],
        subCategorylist:[]
    },
    reducers:{
        setcategoryList:(state,action)=>{
            state.categoryList = action.payload
        },
        setSelecetedCategoryCollection :(state, action)=>{
            state.selectedCategoryCollection=action.payload
        },
        setSubCategoryList:(state,action)=>{
            state.subCategorylist = action.payload

        }
    }
})
export const {setcategoryList, setSelecetedCategoryCollection,setSubCategoryList} = categorySlice.actions
export default categorySlice.reducer