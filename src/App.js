import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Provider store={store}>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Provider>
      </div>
    </div>
  );
}

export default App;
