import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import CartHeader from "./CartHeader";
import Footer from "../../component/layout/Footer";
import { Box } from "@mui/material";
const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLISABLE_KEY);
  const options = {
    mode: "payment",
    amount: 100,
    currency: "aud",
    // clientSecret: import.meta.env.VITE_SECRET_KEY,
  };
  return (
    <div>
      <CartHeader/>
      <Box sx={{minHeight:'70vh'}}>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
      </Box>
      <Footer/>
    </div>
  );
};

export default Checkout;
