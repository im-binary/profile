import { CHANGE_THEME } from "../actions/themeAction";

const initialTheme = localStorage.getItem("theme") ?? "light";

const themeReducer = (theme = initialTheme, action) => {
  if (action.type === CHANGE_THEME) {
    localStorage.setItem("theme", action.theme);
    return action.theme;
  }
  return theme;
};

export { themeReducer };
