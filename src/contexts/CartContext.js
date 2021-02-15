import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const initialState = {
  cartItems: [],
  cartCount: 0,
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
  
  function removeItem(item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    })
  }

  function increaseQty(item) {
    dispatch({
      type: 'INCREASE_QTY',
      payload: item
    })
  }

  function decreaseQty(item) {
    dispatch({
      type: 'DECREASE_QTY',
      payload: item
    })
  }

  function clearCart() {
    dispatch({
      type: 'CLEAR_CART'
    })
  }


  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      increaseQty,
      decreaseQty,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}