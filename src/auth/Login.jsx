import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import CustomInput from "../component/input/CustomInput";
import ClientLayout from "../component/layout/ClientLayout";

const inputs = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
];
const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  };

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
