import { createContext, useReducer } from 'react';
import CartReducer, { tallyCart } from './CartReducer';
import { ApplicationState, Item, ChildrenProps } from '../types';


const storageItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []

const initialState = {
  cartItems: storageItems,
  ...tallyCart(storageItems),
  checkout: false,
  shipping: 0
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
    if (item.quantity === 1) {
      return removeItem(item)
    }
    
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

  function updateCheckout(bool: boolean) {
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
      updateCheckout
    }}>
      {children}
    </CartContext.Provider>
  )
}