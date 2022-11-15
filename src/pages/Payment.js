import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
// import ProductSummary from "../components/ProductSummary";

const Payment = ({ data, userToken }) => {
  const stripePromise = loadStripe(
    `${process.env.REACT_APP_VINTED_REACTEUR_STRIPE_API_KEY}`
  );

  return (
    <div className="payment-wrapper">
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} userToken={userToken} />
      </Elements>
    </div>
  );
};

export default Payment;
