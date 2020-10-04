import { ADD_THAT_SHIT, DELETE_THAT_SHIT } from "./action-constants";
import Transaction from "../models/Transaction";

export interface AddActionType {
  type: typeof ADD_THAT_SHIT;
  payload: Transaction;
}

export interface DeleteActionType {
  type: typeof DELETE_THAT_SHIT;
  payload: { id: string };
}
