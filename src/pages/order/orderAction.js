import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

import { setOrderHistory } from "../../redux/orderSlice";

export const sendOrder = (docData) => async () => {
  try {
    const docRef = await addDoc(collection(db, "orders"), docData);
  } catch (error) {
    console.log(error);
    console.log('hey')
  }
};

export const getOrderHistory = (id) => async (dispatch) => {
  try {
    const q = query(collection(db, "orders"), where("userId", "==", id));

    const querySnapshot = await getDocs(q);
    const OrderList =[]
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      OrderList.push(doc.data())
      
      
    });
   
    dispatch(setOrderHistory(OrderList))
  } catch (error) {
    console.log(error);
    console.log('hello')
  }
};
