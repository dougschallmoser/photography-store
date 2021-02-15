import React, { useContext } from 'react';
import Layout from '../Layout';
import './Cart.css';
import { CartContext } from '../../contexts/CartContext';
import CartItems from './CartItems';
import CartSummary from './CartSummary';

function Cart() {

  const { cartCount } = useContext(CartContext);

  return (
    <Layout>
      <h1>CART</h1>
        {cartCount! > 0 ? 
          <div className="cart-container">
            <CartItems />
            <CartSummary />
          </div>
          : <h3>Your shopping cart is empty.</h3>
        }
    </Layout>
  )
}

export default Cart;