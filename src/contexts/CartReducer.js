function sumItems(items) {
  const cartCount = items.reduce((tot, item) => tot + item.quantity, 0)
  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  return {
    cartCount,
    totalCost
  }
}

function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = state.cartItems.find(item => item.id === action.payload.id)

      if (!item) {
        state.cartItems.push({...action.payload, quantity: 1})
      } else {
        item.quantity++
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      }
    default: 
      return state
  }
}

export default CartReducer