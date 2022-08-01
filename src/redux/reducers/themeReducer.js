import { Is_Dark_Mode } from "../actions/themeAction";

const initialState = false;

const themeAction = (state = initialState, action) => {
  if (action.type === Is_Dark_Mode) {
    return action.themeMode;
  }
  return state;
};

export default themeAction;
