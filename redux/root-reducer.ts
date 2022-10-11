import { combineReducers } from "redux";
import {
  ModeReducer,
  GetUsersReducer,
  LoginUserReducer,
  RegisterUserReducer,
} from "redux/reducers";

export default combineReducers({
  darkMode: ModeReducer,
  users: GetUsersReducer,
  // Login: LoginUserReducer,
  // Register: RegisterUserReducer,
});
