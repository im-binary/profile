import { Is_Light_Mode } from "../actions/themeAction";

const initialState = true;

const themeAction = (state = initialState, action) => {
  if (action.type === Is_Light_Mode) {
    return action.themeMode;
  }
  return state;
};

export default themeAction;
