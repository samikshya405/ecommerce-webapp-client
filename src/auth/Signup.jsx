import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../component/input/CustomInput";
import ClientLayout from "../component/layout/ClientLayout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { getUserInfoAction } from "../redux/auth/authAction";

const inputs = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "number", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "password",
    label: "Create Password",
    type: "password",
    required: true,
  },
];
const initialstate = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  
};
const Signup = () => {
  const [formData, setformData] = useState(initialstate);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, ...restFormData } = formData;
    const { email } = formData;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const {user} = userCredential
      console.log(user.uid)
      dispatch(getUserInfoAction(user.uid))
      setformData(initialstate)
      toast('account created')

    } catch (error) {
      if(errorCode.includes("auth/email-already-in-use")) {
        toast.error("Account already exists!");
      } else {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <ClientLayout>
        <Stack className="form-wrapper" sx={{ background: "#eff0f5" }}>
          <Box padding={2} marginTop={2} elevation={5} className="form">
            <form onSubmit={handleSubmit}>
              <Typography textAlign="center"> Signup</Typography>

              {inputs.map((input) => {
                return (
                  <CustomInput
                    key={input.name}
                    {...input}
                    value = {formData[input.name]}
                    onChange={handleChange}
                  />
                );
              })}
              <Button variant="contained" type="submit" fullWidth>
                Create an Account
              </Button>
            </form>
            <Typography padding={2} textAlign="center">
              Already have an Account?
            </Typography>
            <Link to="/login">
              <Button variant="outlined" fullWidth>
                Log in
              </Button>
            </Link>
          </Box>
        </Stack>
      </ClientLayout>
    </>
  );
};

export default Signup;
