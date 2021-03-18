import { Item } from './';

export enum ActionTypes {
  Add = 'ADD_ITEM',
  Remove = 'REMOVE_ITEM',
  Increase = 'INCREASE_QTY',
  Decrease = 'DECREASE_QTY',
  Clear = 'CLEAR_CART',
  Checkout = 'CHECKOUT'
}

export interface AddItemAction {
  type: ActionTypes.Add;
  payload: Item
}

export interface RemoveItemAction {
  type: ActionTypes.Remove;
  payload: Item
}

export interface IncreaseQtyAction {
  type: ActionTypes.Increase;
  payload: Item
}

export interface DecreaseQtyAction {
  type: ActionTypes.Decrease;
  payload: Item
}

export interface ClearCartAction {
  type: ActionTypes.Clear;
}

export interface UpdateCheckoutAction {
  type: ActionTypes.Checkout;
  payload: boolean
}

export type Action = AddItemAction | RemoveItemAction | IncreaseQtyAction |
DecreaseQtyAction | ClearCartAction | UpdateCheckoutAction