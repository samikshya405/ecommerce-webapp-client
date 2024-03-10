import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomInput from "../../component/input/CustomInput";
import CartproductCard from "./CartproductCard";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProductcart from "./CheckoutProductCart";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import HttpsIcon from "@mui/icons-material/Https";
import { setUserInfo } from "../../redux/auth/authSlice";
import { setWishList } from "../../redux/wishlist/wishlistSlice";

const inputs = [
  { name: "email", label: "Email", type: "email", required: true },
  // { name: "fname", label: "Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "number", required: true },
  { name: "address", label: "Address", type: "text", required: true },
];
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const clientSecret = import.meta.env.VITE_SECRET_KEY;
  const { cartItem } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const initialState = {
    email: userInfo.email,
    phone: userInfo.phone,
    address: "",
  };
  const [formData, setformData] = useState(initialState);
  const subTotal = cartItem.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const handleChange=(e)=>{
    const {name,value} = e.target
    setformData({...formData, [name]:value})

  }

  const backendURL =
    "https://webhook.site/#!/view/37a4fc86-f6df-498b-a2f2-a29af0dd3cda";
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // we will explicitly handle this function going forward
    if (elements == null || stripe === null) return;

    const { error: formSubmitError } = await elements.submit();
    if (formSubmitError) {
      setError(formSubmitError.message);
      return;
    }
    const price = subTotal+2.98;
    const stripeInstance = new Stripe(import.meta.env.VITE_SECRET_KEY, {
      apiVersion: "2023-08-16",
    });
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: Math.round(price * 100),
      currency: "aud",
    });

    const { client_secret: paymentIntentClientSecret, id } = paymentIntent;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: paymentIntentClientSecret,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });

    if (error) {
      setError(error.message);
    }else{
      console.log('payment succedded')
      

    }
  };

  return (
    <Container>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Paper sx={{ padding: "10px" }}>
            <Typography variant="h5">$ {subTotal + 2.98}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "20px",
              }}
            >
              <h2>Order Summary</h2>
              <Link to="/cart">
                <IconButton color="primary">
                  Edit bag <EditIcon />
                </IconButton>
              </Link>
            </Box>
            <Paper>
              <Stack spacing={2} padding={2}>
                {cartItem.map((item, index) => {
                  return (
                    <Box key={item.id + index}>
                      <CheckoutProductcart key={item.id + index} item={item} />
                      {index !== cartItem.length - 1 && <hr />}
                    </Box>
                  );
                })}
              </Stack>
            </Paper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <Typography>Subtotal</Typography>
              <h4>${subTotal}</h4>
            </Box>
            

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <Typography>Shipping fee </Typography>
              <h4>$2.98</h4>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <h3>Total </h3>
              <h4>${subTotal + 2.98}</h4>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Paper sx={{ padding: "10px" }}>
            <div>{error}</div>

            <form onSubmit={handleFormSubmit}>
              {inputs.map((input) => {
                return (
                  <CustomInput
                    key={input.name}
                    {...input}
                    value={formData[input.name]}
                    onChange={handleChange}
                  />
                );
              })}

              <PaymentElement />
              <Button
                variant="contained"
                style={{
                  background: "black",
                  width: "100%",
                  padding: "10px 0px",
                  marginTop: "20px",
                }}
                className="btn"
                type="submit"
              >
                <HttpsIcon /> Checkout securly
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutForm;