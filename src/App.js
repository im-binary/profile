import { GreetingLog } from "./components/GreetingLog";
import { Header } from "./components/Header";
import { ThemeButton } from "./components/ThemeButton";
import { useTheme } from "./hooks/theme";

export function App() {
  const [theme, setTheme] = useTheme();

  const handleChangeMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Header />
      <ThemeButton className='no-print' handleChangeMode={handleChangeMode} />
      <GreetingLog />
    </>
  );
}
