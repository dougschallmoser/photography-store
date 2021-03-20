import { Item } from '../../types';
import { ActionType } from '../action-types';

interface AddItemAction {
  type: ActionType.ADD;
  payload: Item;
}

interface RemoveItemAction {
  type: ActionType.REMOVE;
  payload: Item;
}

interface IncreaseQtyAction {
  type: ActionType.INCREASE;
  payload: Item
}

interface DecreaseQtyAction {
  type: ActionType.DECREASE;
  payload: Item;
}

interface ClearCartAction {
  type: ActionType.CLEAR;
}

interface UpdateCheckoutAction {
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