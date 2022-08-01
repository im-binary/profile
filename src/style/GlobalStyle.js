import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";

export default function GlobalStyle() {
  const state = useSelector((state) => state);

  return <Global styles={style(state)} />;
}

const style = (state) => css`
  body {
    background-color: ${state ? "#fff" : "#202124"};
    color: ${state ? "#000" : "#eeeeee"};
  }
`;
