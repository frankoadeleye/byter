import { SET_MODE } from "redux/types";

const initialState = {
  darkMode: false,
};

export default function ModeReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MODE.DEFAULT:
      return {
        ...state,
        darkMode: action.payload,
      };

    case SET_MODE.LIGHT:
      return {
        ...state,
        darkMode: false,
      };

    case SET_MODE.DARK:
      return {
        ...state,
        darkMode: true,
      };
    default:
      return state;
  }
}
