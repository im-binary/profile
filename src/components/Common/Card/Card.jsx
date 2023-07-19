/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import { useTheme } from "../../../hooks/theme";
import { darkBoxShadow, lightBoxShadow, mainColor } from "../../../style/main";

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
  padding: 20px;
  transition: all 0.5s;

  &:nth-of-type(2n - 1) {
    border-radius: 0 40px 0 40px;
  }

  &:nth-of-type(2n) {
    border-radius: 40px 0 40px 0;
  }

  &:hover {
    transform: scale(1.04);
    transition: all 0.5s;
  }
`;
