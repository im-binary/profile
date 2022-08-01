import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "./redux/actions/themeAction";
import { useState } from "react";

export default function App() {
  const state = useSelector((state) => state);
  const [theme, setTheme] = useState(state);

  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(changeThemeMode(!theme));
    setTheme(!theme);
  };
  return (
    <>
      <Header />
      <ThemeButton handleChangeMode={handleChangeMode} />
    </>
  );
}
