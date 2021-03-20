import { Item } from './';

export enum ActionTypes {
  ADD = 'ADD_ITEM',
  REMOVE = 'REMOVE_ITEM',
  INCREASE = 'INCREASE_QTY',
  DECREASE = 'DECREASE_QTY',
  CLEAR = 'CLEAR_CART',
  CHECKOUT = 'CHECKOUT'
}

export interface AddItemAction {
  type: ActionTypes.ADD;
  payload: Item;
}

export interface RemoveItemAction {
  type: ActionTypes.REMOVE;
  payload: Item;
}

export interface IncreaseQtyAction {
  type: ActionTypes.INCREASE;
  payload: Item
}

export interface DecreaseQtyAction {
  type: ActionTypes.DECREASE;
  payload: Item;
}

export interface ClearCartAction {
  type: ActionTypes.CLEAR;
}

export interface UpdateCheckoutAction {
  type: ActionTypes.CHECKOUT;
  payload: boolean;
}

export type Action =
  AddItemAction |
  RemoveItemAction |
  IncreaseQtyAction | 
  DecreaseQtyAction |
  ClearCartAction |
  UpdateCheckoutAction