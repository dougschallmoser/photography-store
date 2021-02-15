import React, { createContext } from 'react';
import { products } from '../seed';
import { ChildrenProps } from '../types';

const initialState = {
  products
}

export const ProductsContext = createContext(initialState)

export const ProductsContextProvider = ({ children }: ChildrenProps ) => {

  return (
    <ProductsContext.Provider value={{
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}