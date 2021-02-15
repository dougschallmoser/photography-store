export interface ApplicationState {
  cartItems: Item[],
  checkout: boolean,
  cartCount?: number,
  cartCost?: string,
  addItem?: any,
  removeItem?: any,
  increaseQty?: any,
  decreaseQty?: any,
  clearCart?: any
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

export interface ChildrenProps {
  children: React.ReactNode
}

export interface StateAction {
  type: string;
  payload: any;
}