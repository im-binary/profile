import React from "react";
import { Global, css } from "@emotion/react";
import { darkBackgroundColor, darkFontColor, lightBackgroundColor, lightFontColor } from "./main";
import { useTheme } from "../hooks/theme";

export default function GlobalStyle() {
  const [theme] = useTheme();

  return <Global styles={style(theme)} />;
}

const style = (theme) => css`
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800");

  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: ${theme === "light" ? lightBackgroundColor : darkBackgroundColor};
    color: ${theme === "light" ? lightFontColor : darkFontColor};
    font-family: Nanum Gothic;
  }
`;
