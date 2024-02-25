import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { setProductList, setSelectedProduct } from "./productSlice";
export const getProductAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;

      productList.push({ id, ...doc.data() });
    });
    
    dispatch(setProductList(productList));
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(setSelectedProduct({id, ...docSnap.data()}))
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    consol.log(error);
  }
};
