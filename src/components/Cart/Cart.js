import React, { useContext } from 'react';
import Layout from '../Layout';
import './Cart.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { CartContext } from '../../contexts/CartContext';

function Cart() {

  const { cartItems } = useContext(CartContext);

  return (
    <Layout>
      <h1>Cart</h1>
        {cartItems.length > 0 ? 
          <div className="cart-container">
            <CartItems />
            <CartTotal />
          </div>
          : <h3>Your shopping cart is empty.</h3>
        }
    </Layout>
  )
}

export default Cart;