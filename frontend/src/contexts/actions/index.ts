import { Item } from '../../types';
import { ActionType } from '../action-types';

export interface AddItemAction {
  type: ActionType.ADD;
  payload: Item;
}

export interface RemoveItemAction {
  type: ActionType.REMOVE;
  payload: Item;
}

export interface IncreaseQtyAction {
  type: ActionType.INCREASE;
  payload: Item
}

export interface DecreaseQtyAction {
  type: ActionType.DECREASE;
  payload: Item;
}

export interface ClearCartAction {
  type: ActionType.CLEAR;
}

export interface UpdateCheckoutAction {
  type: ActionType.CHECKOUT;
  payload: boolean;
}

export type Action =
  AddItemAction |
  RemoveItemAction |
  IncreaseQtyAction | 
  DecreaseQtyAction |
  ClearCartAction |
  UpdateCheckoutAction