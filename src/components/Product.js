import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from '../contexts/CartContext';

function Product({ data }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <img src={`${data.photo}`} alt={data.name} />
      <h3>{data.name}</h3>
      <h2>${data.price.toFixed(2)}</h2>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  )
}

export default Product;