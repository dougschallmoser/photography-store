import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import './Stripe.css';

const PUBLIC_KEY = "pk_live_51ILWQ0IPKzRqC9xealbBlIp3ZWZxmoejGljAww5G0RoNjTmUkXEI8MimVRbudOpenq8Lmtjg0OqII7fQ0A0taohq00USujbS9x"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeContainer;