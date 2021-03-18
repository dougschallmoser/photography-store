export * from './actions';

export interface ApplicationState {
  cartItems: Item[],
  cartCount: number,
  cartCost: number,
  checkout: boolean,
  shipping: number,
  addItem?(item: Item): void,
  removeItem?(item: Item): void,
  increaseQty?(item: Item): void,
  decreaseQty?(item: Item): void,
  clearCart?(): void,
  updateCheckout?(bool: boolean): void
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