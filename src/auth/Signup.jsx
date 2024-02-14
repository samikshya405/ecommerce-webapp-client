import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../component/input/CustomInput";
import ClientLayout from "../component/layout/ClientLayout";

const inputs = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "number", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "createPassword",
    label: "Create Password",
    type: "password",
    required: true,
  },
  
];
const initialstate = {
  fullName: "",
  phone: "",
  email: "",
  createPassword: "",
  password: "",
};
const Signup = () => {
  const [formData, setformData] = useState(initialstate);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {  password, ...restFormData } = formData;
    const { email } = formData;
    
    
  };
  return (
    <>
    <ClientLayout>
      <Stack className="form-wrapper" sx={{background:'#eff0f5'}}>
        <Box  padding={2} marginTop={2} elevation={5} className="form">
          <form onSubmit={handleSubmit}>
            <Typography textAlign="center"> Signup</Typography>

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
