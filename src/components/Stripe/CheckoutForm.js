import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import * as EmailValidator from 'email-validator';
import { CartContext } from '../../contexts/CartContext';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'rgb(110, 223, 170)',
      color: '#000',
      fontWeight: 500,
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
  const { cartCost, updateCheckout } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    })
  }

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

  const validate = (name, email, address, city, state, zip) => {
    return {
      name: name.length < 2,
      email: !EmailValidator.validate(email),
      address: address.length < 5,
      city: city.length < 2,
      state: state.length > 2 || state.length === 1,
      zip: zip.length > 5 || zip.length < 5
    }
  }

  const { name, email, address, city, state, zip } = userInfo;
  const errors = validate(name, email, address, city, state, zip);
  const disabled = Object.keys(errors).some(name => errors[name])

  return (
    <form id="checkout-form" onSubmit={handleSubmit}>
      <div id="checkout-header">Checkout</div>
      <div className="FormRow">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className={name.length > 0 ? (errors.name ? "error" : "success") : ""}
          placeholder="Doug Programmer"
        />
      </div>
      <div className="FormRow">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={email.length > 0 ? (errors.email ? "error" : "success") : ""}
          placeholder="doug@example.com"
        />
      </div>
      <div className="FormRow">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          className={address.length > 0 ? (errors.address ? "error" : "success") : ""}
          placeholder="185 Berry Street Suite 400"
        />
      </div>
      <div className="FormRow">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
          className={city.length > 0 ? (errors.city ? "error" : "success") : ""}
          placeholder="Bellingham"
        />
      </div>
      <div className="FormRow">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={state.toUpperCase()}
          maxLength="2"
          onChange={handleChange}
          className={state.length > 0 ? (errors.state ? "error" : "success") : ""}
          placeholder="WA"
        />
      </div>
      <div className="FormRow">
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={zip}
          maxLength="5"
          onChange={handleChange}
          className={zip.length > 0 ? (errors.zip ? "error" : "success") : ""}
          placeholder="98226"
        />
      </div>
      <hr/>
      <div className="note">Secure checkout provided through Stripe</div>
      Total Cost: ${cartCost}
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} />
      </div>
      <button disabled={disabled} className="pay-btn">Pay</button>
      <button className="close-btn" type="button" onClick={() => updateCheckout(false)}>Cancel</button>
    </form>
  )
}

export default CheckoutForm