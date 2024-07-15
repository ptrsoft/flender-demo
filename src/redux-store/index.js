import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./toolkit";

function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept(reducer, () => {
      const nextRootReducer = require(reducer);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

export default store;
