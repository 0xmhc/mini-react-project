import { combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountSlice";
import consumerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  consumer: consumerReducer,
});
const store = createStore(rootReducer);

export default store;
