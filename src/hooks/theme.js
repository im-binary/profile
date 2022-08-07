import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions/themeAction";

export function useTheme() {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();

  const setTheme = (theme) => {
    dispatch(changeTheme(theme));
  };

  return [theme, setTheme];
}
