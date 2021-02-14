function tallyCart(items) {
  const cartCount = items.reduce((tot, item) => tot + item.quantity, 0)
  const cartCost = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  return {
    cartCount,
    cartCost
  }
}

function CartReducer(state, action) {
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
      state.cartItems.splice(state.cartItems.indexOf(removedItem), 1)
      
      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case 'INCREASE_QTY':
      state.cartItems.find(item => item.id === action.payload.id).quantity++

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    case 'DECREASE_QTY':
      state.cartItems.find(item => item.id === action.payload.id).quantity--

      return {
        ...state,
        ...tallyCart(state.cartItems),
        cartItems: [...state.cartItems]
      }
    default: 
      return state
  }
}

export default CartReducer