import { ApplicationState, StateAction, Item } from '../types';

function tallyCart(items: Item[]) {
  const cartCount = items.reduce((tot, item) => tot + item.quantity, 0)
  const cartCost = items.reduce((tot, item) => tot + item.price * item.quantity, 0).toFixed(2)
  return {
    cartCount,
    cartCost
  }
}

function CartReducer(state: ApplicationState, action: StateAction): ApplicationState {
  switch (action.type) {
    case 'ADD_ITEM':
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
    case 'REMOVE_ITEM':
      const removedItem = state.cartItems.find(item => item.id === action.payload.id && item.size === action.payload.size)
      state.cartItems.splice(state.cartItems.indexOf(removedItem!), 1)
      
      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case 'INCREASE_QTY':
      state.cartItems.find(item => item.id === action.payload.id)!.quantity++

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case 'DECREASE_QTY':
      state.cartItems.find(item => item.id === action.payload.id)!.quantity--

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case 'CLEAR_CART':
      return {
        ...state,
        ...tallyCart([]),
        cartItems: []
      }
    case 'CHECKOUT':
      return {
        ...state,
        checkout: action.payload
      }
    default: 
      return state
  }
}

export default CartReducer