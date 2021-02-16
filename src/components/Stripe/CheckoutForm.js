import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'rgb(110, 223, 170)',
      color: '#000',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: 'rgb(110, 223, 170)'},
      '::placeholder': {color: 'rgb(110, 223, 170)'},
    },
    invalid: {
      iconColor: 'rgb(226, 110, 110)',
      color: 'rgb(226, 110, 110)',
    },
  },
};

function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      console.log("Stripe token generated!", paymentMethod)
    } else {
      console.log(error.message)
    }
  }

  return (
    <form id="checkout-form" onSubmit={handleSubmit}>
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} />
      </div>
      <button className="pay-btn">Pay</button>
    </form>
  )
}

export default CheckoutForm