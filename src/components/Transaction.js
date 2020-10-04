import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransactionActionCreator } from "../redux/actions/actions";

export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount);
  const className = transaction.amount < 0 ? "minus" : "plus";

  const deleteTransaction = (id) => {
    if (!id) return;

    dispatch(deleteTransactionActionCreator({ id }));
  };

  return (
    <li className={className}>
      {transaction.text}
      <span>
        {sign}${amount}
      </span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
