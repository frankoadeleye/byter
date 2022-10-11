import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { GET_USERS } from "redux/types";
import { AnyAction } from "redux";
import { GetUsersActions } from "redux/actions";
import Services from "utils/network-requests/services";

function* watchGetUsersRequest() {
  yield takeLatest(GET_USERS.START, handleGetUsersRequest);
}

function* handleGetUsersRequest(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(Services.GET_USERS, data);
    yield put(GetUsersActions.success(response));
    onSuccess?.(response);
  } catch (error) {
    onError?.(error.response);
  }
}

export default watchGetUsersRequest;
