import { createContext } from 'react';
import { products } from '../seed';

const initialState = {
  products
}

export const ProductsContext = createContext(initialState)

export const ProductsContextProvider: React.FC = ({ children }) => {

  return (
    <ProductsContext.Provider value={{
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}