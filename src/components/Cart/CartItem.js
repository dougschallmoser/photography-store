import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <div>
        <img
          className="product-image-cart"
          src={`${item.photo}`}
          alt={item.name}
        />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>Price ${item.price.toFixed(2)}</p>
      </div>
      <div>
        <p>Qty: {item.quantity}</p>
      </div>
      <div>
        <button className="btn-qty increase">&#43;</button>
        <button className="btn-qty decrease">&#8722;</button>
        <button className="btn-qty trash">
          <img src={process.env.PUBLIC_URL + '/images/trash.svg'} alt="trash can"/>
        </button>
      </div>
    </div>
  )
}

export default CartItem;