import { LOGIN, LOGOUT, REGISTER } from "redux/types";

function LoginSuccess(payload) {
  return {
    type: LOGIN.SUCCESS,
    payload,
  };
}

function LoginFail() {
  return {
    type: LOGIN.FAIL,
  };
}

function RegisterSuccess(payload) {
  return {
    type: REGISTER.SUCCESS,
    payload,
  };
}

function RegisterFail() {
  return {
    type: REGISTER.FAIL,
  };
}

function Logout() {
  return {
    type: LOGOUT,
  };
}

const LoginActions = {
  success: LoginSuccess,
  Fail: LoginFail,
  Logout,
};

const RegisterActions = {
  success: RegisterSuccess,
  Fail: RegisterFail,
};

export { LoginActions, RegisterActions };
