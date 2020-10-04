import { v4 as uuid } from "uuid";
import { AddActionType, DeleteActionType } from "./action-types";
import { ADD_THAT_SHIT, DELETE_THAT_SHIT } from "./action-constants";

export const AddTransactionActionCreator = ({
  text,
  amount,
}: {
  text: string;
  amount: number;
}): AddActionType => ({
  type: ADD_THAT_SHIT,
  payload: {
    id: uuid(),
    text,
    amount,
  },
});

export const deleteTransactionActionCreator = ({
  id,
}: {
  id: string;
}): DeleteActionType => ({
  type: DELETE_THAT_SHIT,
  payload: { id },
});
