import { GET_USERS } from "redux/types";

function GetUsersSuccess(payload) {
  return {
    type: GET_USERS.SUCCESS,
    payload,
  };
}

function GetUsersFail() {
  return {
    type: GET_USERS.FAIL,
  };
}

const GetUsersActions = {
  success: GetUsersSuccess,
  fail: GetUsersFail,
};

export default GetUsersActions;
