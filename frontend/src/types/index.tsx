export interface ApplicationState {
  cartItems: Item[],
  cartCount: number,
  cartCost: number,
  checkout: boolean,
  shipping: number,
  addItem?: any,
  removeItem?: any,
  increaseQty?: any,
  decreaseQty?: any,
  clearCart?: any,
  updateCheckout?: any
}

export interface Item {
  id: number,
  name: string,
  quantity: number,
  price: number,
  photo: string,
  size: string
}

export interface ProductItem {
  id: number,
  name: string,
  price: {
    [key: string]: number
  },
  photo: string
}

export enum ActionType {
  Add = 'ADD_ITEM',
  Remove = 'REMOVE_ITEM',
  Increase = 'INCREASE_QTY',
  Decrease = 'DECREASE_QTY',
  Clear = 'CLEAR_CART',
  Checkout = 'CHECKOUT'
}

export interface ChildrenProps {
  children: React.ReactNode
}

export interface StateAction {
  type: string;
  payload: any;
}

export interface ButtonProps {
  added: boolean,
  btnText: string
}