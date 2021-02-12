import React, { useContext } from 'react';
import Layout from '../Layout';
import './Cart.css';
import CartItems from './CartItems';
import { CartContext } from '../../contexts/CartContext';

function Cart() {

  const { cartCount, totalCost } = useContext(CartContext);

  return (
    <Layout>
      <h1>Cart</h1>
        {cartCount > 0 ? 
          <div className="cart-container">
            <CartItems />
            <div className="cart-total">
              <p>Total Items: {cartCount}</p>
              <p>Total Cost: {totalCost}</p>
            </div>
          </div>
          : <h3>Your shopping cart is empty.</h3>
        }
    </Layout>
  )
}

export default Cart;