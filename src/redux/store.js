import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";
import { productSaga } from "./productsaga";
import rootreducer from "./rootreducer";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootreducer,

  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
