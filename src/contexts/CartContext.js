import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
import { products } from '../seed';

const initialState = {
  cartItems: [],
  products,
  checkout: false
}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  return (
    <CartContext.Provider value={{
      ...state,
      addItem
    }}>
      {children}
    </CartContext.Provider>
  )
}