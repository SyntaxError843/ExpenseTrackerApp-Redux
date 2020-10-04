import transactionsInitialState from "../initialStates/transactions";
import { ADD_THAT_SHIT, DELETE_THAT_SHIT } from "../actions/action-constants";
import { AddActionType, DeleteActionType } from "../actions/action-types";
import Transaction from "../models/Transaction";
import { combineReducers } from "redux";

type TransactionActionTypes = AddActionType | DeleteActionType;

const transactionsReducer = (
  state: Transaction[] = transactionsInitialState,
  action: TransactionActionTypes
) => {
  switch (action.type) {
    case ADD_THAT_SHIT:
      return [...state, action.payload];

    case DELETE_THAT_SHIT:
      return state.filter(
        (transaction) => transaction.id !== action.payload.id
      );

    default:
      return state;
  }
};

export default combineReducers({
  transactions: transactionsReducer,
});
