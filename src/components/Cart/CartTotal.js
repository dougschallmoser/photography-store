import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CartTotal() {

  const { cartItems } = useContext(CartContext);

  const arrAmounts = cartItems.map(item => item.price)
  const total = arrAmounts.reduce((acc, curr) => acc + curr, 0).toFixed(2)

  return (
    <div className="cart-total">
      {total}
    </div>
  )
}

export default CartTotal;