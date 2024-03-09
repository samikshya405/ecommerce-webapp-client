import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { setUserInfo } from "./authSlice"
import { toast } from "react-toastify"

export const getUserInfoAction = (id)=>async(dispatch)=>{
    try{
        const docRef = doc(db, 'users', id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            const userData = docSnap.data()
            dispatch(setUserInfo(userData))

        }

    }catch(error){
        console.log('error')
        toast.error('no user found')
    }

}