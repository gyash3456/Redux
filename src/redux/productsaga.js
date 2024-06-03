import { takeEvery } from "redux-saga/effects";

function* getProducts() {
  console.log("call api here");
}
export function* productSaga() {
  yield takeEvery("PRODUCT_LIST", getProducts);
}
