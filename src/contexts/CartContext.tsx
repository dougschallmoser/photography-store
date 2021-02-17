import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
import { ApplicationState, Item, ChildrenProps } from '../types';

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartCost: "0",
  checkout: false
}

export const CartContext = createContext<ApplicationState>(initialState);

const asyncer = (dispatch: any, state: ApplicationState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export const CartContextProvider = ({ children }: ChildrenProps ) => {
  const [state, dispatchBase] = useReducer(CartReducer, initialState)

  const dispatch = asyncer(dispatchBase, state)

  function addItem(item: Item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }
  
  function removeItem(item: Item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    })
  }

  function increaseQty(item: Item) {
    dispatch({
      type: 'INCREASE_QTY',
      payload: item
    })
  }

  function decreaseQty(item: Item) {
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

  function checkoutStatus(bool: boolean) {
    dispatch({
      type: 'CHECKOUT',
      payload: bool
    })
  }


  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      increaseQty,
      decreaseQty,
      clearCart,
      checkoutStatus
    }}>
      {children}
    </CartContext.Provider>
  )
}