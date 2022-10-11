import {
  takeLatest,
  takeEvery,
  all,
  take,
  call,
  put,
  fork,
} from "redux-saga/effects";
import { LoginActions, RegisterActions } from "redux/actions";
import { LOGIN, REGISTER } from "redux/types";
import { AnyAction } from "redux";
import Services from "utils/network-requests/services";
import SetAuthHeader from "utils/constants/set-auth-headers";

/*____________________________ login user  _____________________________*/

function* watchUserLoginRequests() {
  yield takeLatest(LOGIN.START, handleUserLoginRequest);
}

function* handleUserLoginRequest(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(Services.LOGIN_USER, data);
    SetAuthHeader(response.data.token);
    yield put(LoginActions.success(response));
    onSuccess?.(response.data.msg);
  } catch (error) {
    onError?.(error.response.data.msg);
  }
}

/*____________________________   register user   _____________________________*/

function* watchUserRegisterRequest() {
  yield takeLatest(REGISTER.START, handleUserRegisterRequest);
}

function* handleUserRegisterRequest(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(Services.REGISTER_USER, data);
    SetAuthHeader(response.data.token);
    yield put(RegisterActions.success(response));
    onSuccess?.(response.data.msg);
  } catch (error) {
    onError?.(error.response.data.msg);
  }
}

function* watchUserRequests() {
  yield all([watchUserLoginRequests(), watchUserRegisterRequest()]);
}

export default watchUserRequests;
