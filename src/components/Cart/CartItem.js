import React from 'react';

function CartItem({ item }) {
  return (
    <div>
      {item.name} {item.quantity}
    </div>
  )
}

export default CartItem;