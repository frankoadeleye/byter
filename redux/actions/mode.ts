import { SET_MODE } from "redux/types";

function SetLightMode() {
  return {
    type: SET_MODE.LIGHT,
  };
}

function SetDefaultMode(payload) {
  return {
    type: SET_MODE.DEFAULT,
    payload,
  };
}

function SetDarkMode() {
  return {
    type: SET_MODE.DARK,
  };
}

const ModeActions = {
  Dark: SetDarkMode,
  Light: SetLightMode,
  Default: SetDefaultMode,
};

export default ModeActions;
