import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { darkBackgroundColor, darkFontColor, lightBackgroundColor, lightFontColor } from "./main";

export default function GlobalStyle() {
  const state = useSelector((state) => state);

  return <Global styles={style(state)} />;
}

const style = (state) => css`
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800");

  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: ${state ? lightBackgroundColor : darkBackgroundColor};
    color: ${state ? lightFontColor : darkFontColor};
    font-family: Nanum Gothic;
  }
`;
