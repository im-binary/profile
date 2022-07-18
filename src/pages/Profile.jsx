import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";

export default function Profile() {
  return (
    <section css={profileContainer}>
      <h2>안녕하세요</h2>
    </section>
  );
}

const profileContainer = css`
  ${mainSectionContainer}
`;
