import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/transactionsReducer";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);
