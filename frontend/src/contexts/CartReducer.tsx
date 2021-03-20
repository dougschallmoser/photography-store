import { ApplicationState, Item } from '../types';
import { ActionType } from './action-types';
import { Action } from './actions';

const setStorage = (items: Item[]) => {
  localStorage.setItem('cart', JSON.stringify(items.length > 0 ? items : []));
}

export function tallyCart(items: Item[]) {
  setStorage(items)
  const cartCount = items.reduce((tot, item) => tot + item.quantity, 0)
  const cartCost = items.reduce((tot, item) => tot + item.price * item.quantity, 0)

  return {
    cartCount,
    cartCost
  }
}

function CartReducer(state: ApplicationState, action: Action): ApplicationState {
  switch (action.type) {
    case ActionType.ADD:
      const item = state.cartItems.find(item => item.id === action.payload.id && item.size === action.payload.size)

      if (!item) {
        state.cartItems.push({...action.payload, quantity: 1})
      } else {
        item.quantity++
      }

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case ActionType.REMOVE:
      const removedItem = state.cartItems.find(item => item.id === action.payload.id && item.size === action.payload.size)
      state.cartItems.splice(state.cartItems.indexOf(removedItem!), 1)
      
      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case ActionType.INCREASE:
      state.cartItems.find(item => item.id === action.payload.id)!.quantity++

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case ActionType.DECREASE:
      state.cartItems.find(item => item.id === action.payload.id)!.quantity--

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case ActionType.CLEAR:
      return {
        ...state,
        ...tallyCart([]),
        cartItems: []
      }
    case ActionType.CHECKOUT:
      return {
        ...state,
        checkout: action.payload
      }
    default: 
      return state
  }
}

export default CartReducer