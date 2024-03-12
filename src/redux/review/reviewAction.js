import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { setAllProductReview } from "./reviewSlice"

export const addReview=(docData)=>async(dispatch)=>{
    try{
        const docRef = await addDoc(collection(db,'reviews'),docData)

    }catch(error){
        console.log(error)
    }

}
export const getAllproductReview = ()=>async(dispatch)=>{
    try{
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const reviewList = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
   
          reviewList.push({ id, ...doc.data() });
        });
        
        dispatch(setAllProductReview(reviewList));

    }catch(error){

    }

}
export const getSelectedProductReview = (id) => async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'reviews'));
      const reviewList = [];
      querySnapshot.forEach((doc) => {
        const reviewData = doc.data();
        // Assuming productId is a field in your review document
        if (reviewData.productId === id) {
          reviewList.push({ id: doc.id, ...reviewData }); // Include doc.id for unique key in React
        }
      });
      dispatch(setAllProductReview(reviewList));
    } catch (error) {
      console.error('Error fetching product reviews:', error);
    }
  };