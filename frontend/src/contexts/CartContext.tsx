import { createContext, useReducer } from 'react';
import CartReducer, { tallyCart } from './CartReducer';
import { ApplicationState, Item } from '../types';
import { ActionType } from './action-types';

const storageItems: Item[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []

const initialState = {
  cartItems: storageItems,
  ...tallyCart(storageItems),
  checkout: false,
  shipping: 0
}

export const CartContext = createContext<ApplicationState>(initialState);

export const CartContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  function addItem(item: Item) {
    dispatch({
      type: ActionType.ADD,
      payload: item
    })
  }
  
  function removeItem(item: Item) {
    dispatch({
      type: ActionType.REMOVE,
      payload: item
    })
  }

  function increaseQty(item: Item) {
    dispatch({
      type: ActionType.INCREASE,
      payload: item
    })
  }

  function decreaseQty(item: Item) {
    if (item.quantity === 1) {
      return removeItem(item)
    }
    
    dispatch({
      type: ActionType.DECREASE,
      payload: item
    })
  }

  function clearCart() {
    dispatch({
      type: ActionType.CLEAR,
    })
  }

  function updateCheckout(bool: boolean) {
    dispatch({
      type: ActionType.CHECKOUT,
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
      updateCheckout
    }}>
      {children}
    </CartContext.Provider>
  )
}