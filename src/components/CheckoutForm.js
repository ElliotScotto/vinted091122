import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({
  userToken,
  product_name,
  product_price,
  product_description,
  data,
}) => {
  const [isPaid, setIsPaid] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // On récupère ici les données bancaires que l'utilisateur rentre
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userToken,
      });

      const response = await axios.post(
        `${process.env.REACT_APP_VINTED_REACTEUR_URL}/pay`,
        {
          amount: product_price,
          currency: "eur",
          title: product_name,
          description: product_description,
          token: stripeResponse.userToken.id,
        }
      );

      if (response.data) {
        setIsPaid(true);
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return isPaid ? (
    <p>Merci pour votre achat.</p>
  ) : (
    <div className="payment-container">
      <div className="payment-card">
        <div className="details-pay">
          <span className="bold"> {product_name}</span>Montant total :{" "}
          <span className="bold">{product_price} €</span> (frais de protection
          et frais de port inclus).
          <div className="form-pay">
            <form onSubmit={handleSubmit}>
              <CardElement data={data} userToken={userToken} />
              <button type="submit" disabled={!stripe}>
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
