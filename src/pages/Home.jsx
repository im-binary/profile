import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";

export default function Home() {
  return (
    <section css={homeContainer}>
      <h1>Home</h1>
    </section>
  );
}

const homeContainer = css`
  ${mainSectionContainer}
`;
