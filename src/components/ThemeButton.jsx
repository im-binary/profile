/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../hooks/theme";

export function ThemeButton({ className, handleChangeMode }) {
  const [theme] = useTheme();

  return (
    <button className={className} css={modeButtonContainer} onClick={handleChangeMode}>
      {theme === "light" ? "🌞" : "🌚"}
    </button>
  );
}

const modeButtonContainer = css`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: unset;
  border: none;
  font-size: 6rem;
  z-index: 999;
  cursor: pointer;
`;
