import CheckoutForm from './CheckoutForm';
import { PUBLIC_KEY } from '../../constants';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Stripe.css';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeContainer;