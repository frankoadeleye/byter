import { LOGIN, LOGOUT, REGISTER } from "redux/types";

const initLoginState = {
  isLoggedIn: false,
  isFailedToLogin: false,
  response: null,
};

export function LoginUserReducer(state = initLoginState, action) {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        response: action.payload,
      };

    case LOGIN.FAIL:
      return {
        ...state,
        response: null,
        isFailedToLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        response: null,
        isLoggedIn: false,
        isFailedToLogin: false,
      };

    default:
      return state;
  }
}

const initRegState = {
  isRegistered: false,
  isFailedToRegistered: false,
  response: null,
};

export function RegisterUserReducer(state = initRegState, action) {
  switch (action.type) {
    case REGISTER.SUCCESS:
      return {
        ...state,
        isRegistered: true,
        response: action.payload,
      };

    case REGISTER.FAIL:
      return {
        ...state,
        isFailedToRegistered: true,
      };

    default:
      return state;
  }
}
