import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";
import { useState } from "react";

//timro cart sanga integrate gara 
// create custom stripe page 
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const clientSecret = import.meta.env.VITE_SECRET_KEY;

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
    const price = 100;
    const stripeInstance = new Stripe(import.meta.env.VITE_SECRET_KEY, {
      apiVersion: "2023-08-16",
    });
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: price * 32 * 100,
      currency: "aud",
    });
    

    const { client_secret: paymentIntentClientSecret, id } = paymentIntent;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: paymentIntentClientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/cart`,
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <div>{error}</div>
        <label>Email:</label>
        <div>
          <input
            type="text"
            className="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <PaymentElement />
        <button type="submit">Make a Payment</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
