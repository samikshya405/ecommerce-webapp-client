import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { setSelecetedCategoryCollection, setcategoryList } from "./categorySlice";

export const getCategoryAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categoryList = [];
    querySnapshot.forEach((doc) => {
      
      const id = doc.id;
      categoryList.push({ id, ...doc.data() });
    });
    dispatch(setcategoryList(categoryList));
  } catch (error) {
    console.log(error);
  }
};
export const getCategorySubCollection=(categoryId)=>async(dispatch)=>{
    try {
        const querySnapshot = await getDocs(
          collection(db, "categories", categoryId, "subCategories")
        );
        const subcollectionData = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const eachCollection = { id, ...doc.data() };
          subcollectionData.push(eachCollection);
          
        });
        
    
        dispatch(setSelecetedCategoryCollection(subcollectionData));
      } catch (error) {
        console.error("Error getting category subcollection:", error);
       
      }
}
