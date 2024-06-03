import { delay, put, takeEvery } from "redux-saga/effects";

function* updateTodoAsync(action) {
    console.log("You are in update todo async");
    yield delay(2000);
    yield put({ type: "UPDATE_TODO", payload: action.payload });
}

export function* todoSaga() {
    yield takeEvery("UPDATE_TODO_ASYNC", updateTodoAsync);
}
