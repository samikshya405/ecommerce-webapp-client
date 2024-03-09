import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
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
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
