import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import StripeContainer from '../Stripe';
import './Cart.css';

function CartSummary() {

  const { cartCount, cartCost, clearCart } = useContext(CartContext);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <div className="cart-total">
      <p>Total Items:</p>
      <h2>{cartCount}</h2>
      <p>Subtotal:</p>
      <h2>${cartCost}</h2>
      <p>Shipping:</p>
      <h2>Free</h2>
      <p>Total Cost:</p>
      <h2>${cartCost}</h2>
      <button onClick={() => setOpenCheckout(!openCheckout)} className="checkout-btn">CHECKOUT</button>
      {openCheckout && 
        <div className="checkout-modal">
          <StripeContainer />
        </div>
      }
      <div onClick={() => clearCart()} id="clear-cart">CLEAR CART</div>
    </div>
  )
}

export default CartSummary;