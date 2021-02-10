import React from 'react';
import './Product.css';

function Product({ data }) {
  return (
    <div>
      <img src={`${data.photo}`} alt={data.name} />
      <h3>{data.name}</h3>
      <h2>{data.price.toFixed(2)}</h2>
    </div>
  )
}

export default Product;