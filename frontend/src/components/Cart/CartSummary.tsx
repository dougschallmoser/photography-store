import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import StripeContainer from '../Stripe';
import './Cart.css';

function CartSummary() {

  const { shipping, cartCount, cartCost, clearCart, updateCheckout, checkout } = useContext(CartContext);

  return (
    <div className="cart-total">
      <p>Total Items:</p>
      <h2>{cartCount}</h2>
      <p>Subtotal:</p>
      <h2>${cartCost.toFixed(2)}</h2>
      <p>Shipping:</p>
      <h2>{shipping === 0 ? "Free" : shipping}</h2>
      <p>Total Cost:</p>
      <h2>${(cartCost + shipping).toFixed(2)}</h2>
      <button onClick={() => updateCheckout(true)} className="checkout-btn">CHECKOUT</button>
      {checkout && 
        <div className="checkout-modal">
          <StripeContainer />
        </div>
      }
      <div onClick={() => clearCart()} id="clear-cart">CLEAR CART</div>
    </div>
  )
}

export default CartSummary;