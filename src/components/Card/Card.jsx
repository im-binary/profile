/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import { useTheme } from "../../hooks/theme";
import { darkBoxShadow, lightBoxShadow, mainColor } from "../../style/main";

export default function Card({ children, mode, ...restProps }) {
  const carRef = useRef(null);
  const [theme] = useTheme();

  return (
    <div ref={carRef} css={cardCss(theme)} {...restProps}>
      {children}
    </div>
  );
}

Card.Title = CardTitle;
Card.Content = CardContent;

const cardCss = (theme) => css`
  background-color: ${mainColor};
  box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
  transition: all 0.5s;
  overflow: hidden;
  cursor: pointer;
  border-radius: 14px;
`;
