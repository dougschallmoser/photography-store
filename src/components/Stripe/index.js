import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import './Stripe.css';

const PUBLIC_KEY = "pk_test_51ILWQ0IPKzRqC9xeLMqOWEdJoXuQcJrqgVe7ZjH6sXYiM8dgKE5T2Z7aPogiD7g6EJhFWDW8QI45zT8n3RgjP9zc00jYFk3DqW"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeContainer;