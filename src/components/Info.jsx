import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Info() {
  return <section css={infoContainer}>Info</section>;
}

const infoContainer = css`
  border: 2px solid;
  border-radius: 20px;
  height: 200px;
  padding: 20px;
`;
