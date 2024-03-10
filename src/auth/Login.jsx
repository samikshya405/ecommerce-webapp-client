import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../component/input/CustomInput";
import ClientLayout from "../component/layout/ClientLayout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "../redux/auth/authAction";

const inputs = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
];
const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const {userInfo} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try{
      const signInPromise = signInWithEmailAndPassword(auth, email, password)
      toast.promise(signInPromise, {
        pending: "In progress..."
      });
      const userCredential = await signInPromise
      const {user} = userCredential
      dispatch(getUserInfoAction(user.uid))
      // toast('logged in')

    }catch(error){
      const errorCode = error.code
      if(errorCode.includes("auth/invalid-credential")){
        toast.error("Invalid email or password!");
      }

    }
  };
  useEffect(()=>{
    if(userInfo.uid){
      if(location.state?.path && location.state?.path==='/cart'){
        
        navigate('/checkout');

      }else{
        navigate('/')
      }
    }


  },[userInfo])

  return (
    <>
      <ClientLayout>
        <Stack className="form-wrapper" sx={{background:'#eff0f5'}} >
          <Box padding={3}  marginTop={2} elevation={3} className="form" >
            <form onSubmit={handleSubmit}>
              <Typography textAlign="center" variant="h4">
                login
              </Typography>
              {inputs.map((input) => {
                return (
                  <CustomInput
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                  />
                );
              })}

              <Button variant="contained" type="submit" fullWidth>
                Continue
              </Button>
            </form>
            <Typography textAlign="center" padding={2}>
              New?
            </Typography>
            <Link to="/signup">
              <Button variant="outlined" fullWidth>
                create an Account
              </Button>
            </Link>
          </Box>
        </Stack>
      </ClientLayout>
    </>
  );
};

export default Login;
