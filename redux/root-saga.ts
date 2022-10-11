import { all } from "redux-saga/effects";
import { watchUserRequests, watchGetUsersRequest } from "redux/sagas";

function* CombineSagas() {
  yield all([watchUserRequests(), watchGetUsersRequest()]);
}

export default CombineSagas;
