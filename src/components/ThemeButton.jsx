import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSelector } from "react-redux";

export default function ThemeButton({ handleChangeMode }) {
  const state = useSelector((state) => state);

  return (
    <button css={modeButtonContainer} onClick={handleChangeMode}>
      {state ? "🌞" : "🌚"}
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
