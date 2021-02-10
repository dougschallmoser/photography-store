import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './Product';
import './Store.css';

function Store() {

  const { products } = useContext(CartContext);

  return (
    <div className="products-grid">
      {products.map(product => <Product key={product.id} data={product} />)}
    </div>
  )
}

export default Store;