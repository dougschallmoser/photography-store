import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './Cart.css';

function CartSummary() {

  const { cartCount, cartCost } = useContext(CartContext);

  return (
    <div className="cart-total">
      <p>Total Items:</p>
      <h2>{cartCount}</h2>
      <p>Total Cost:</p>
      <h2>${cartCost}</h2>
    </div>
  )
}

export default CartSummary;