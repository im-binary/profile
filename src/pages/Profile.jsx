import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import Info from "../components/Info";
import Career from "../components/Career";
import Education from "../components/Education";
import ProjectInfo from "../components/ProjectInfo";
import BooksInfo from "../components/BooksInfo";

export default function Profile() {
  return (
    <main css={profileContainer}>
      <Info />
      <Career />
      <Education />
      <ProjectInfo />
      <BooksInfo />
    </main>
  );
}

const profileContainer = css`
  ${mainSectionContainer}
`;
