import { GET_USERS } from "redux/types";

const initialState = {
  isGotUsers: false,
  isFailedToGetUsers: false,
  response: null,
};

export function GetUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS.SUCCESS:
      return {
        ...state,
        isGotUsers: true,
        isFailedToGetUsers: false,
        response: action.payload,
      };

    case GET_USERS.FAIL:
      return {
        ...state,
        isGotUsers: false,
        response: null,
        isFailedToGetUsers: true,
      };

    default:
      return state;
  }
}
