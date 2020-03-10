import { applyMiddleware, compose, createStore } from "redux";

export default (reducers, middlewares) => {
  const enhancer = __DEV__
      ? compose(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};