import React, { useContext } from 'react';
import Layout from '../Layout';
import './Cart.css';
import CartItems from './CartItems';
import { CartContext } from '../../contexts/CartContext';

function Cart() {

  const { cartCount, cartCost } = useContext(CartContext);

  return (
    <Layout>
      <h1>CART</h1>
        {cartCount > 0 ? 
          <div className="cart-container">
            <CartItems />
            <div className="cart-total">
              <p>Total Items:</p>
              <h2>{cartCount}</h2>
              <p>Total Cost:</p>
              <h2>${cartCost}</h2>
            </div>
          </div>
          : <h3>Your shopping cart is empty.</h3>
        }
    </Layout>
  )
}

export default Cart;