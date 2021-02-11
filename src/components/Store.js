import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './Product';
import Layout from './Layout';
import './Store.css';

function Store() {

  const { products } = useContext(CartContext);

  return (
    <Layout>
      <div className="products-length">({products.length}) Products Available</div>
      <div className="products-grid">
        {products.map(product => <Product key={product.id} data={product} />)}
      </div>
    </Layout>
  )
}

export default Store;