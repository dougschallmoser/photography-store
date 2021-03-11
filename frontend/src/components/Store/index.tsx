import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import Product from './Product';
import Layout from '../../common/Layout';
import './Store.css';

function Store() {

  const { products } = useContext(ProductsContext);

  return (
    <Layout>
      <h1>STORE</h1>
      <div className="products-length">({products.length}) Products Available</div>
      <div className="products-grid">
        {products.map(product => <Product key={product.id} data={product} />)}
      </div>
    </Layout>
  )
}

export default Store;