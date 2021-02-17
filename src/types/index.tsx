export interface ApplicationState {
  cartItems: Item[],
  cartCount: number,
  cartCost: string,
  checkout: boolean,
  addItem?: React.Dispatch<any>,
  removeItem?: React.Dispatch<any>,
  increaseQty?: React.Dispatch<any>,
  decreaseQty?: React.Dispatch<any>,
  clearCart?: React.Dispatch<any>,
  checkoutStatus?: React.Dispatch<any>
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