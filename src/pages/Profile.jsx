import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import { Info } from "../components/Profile/Info";
import { Career } from "../components/Profile/Career";
import { TechStack } from "../components/Profile/TechStack";
import { Education } from "../components/Profile/Education";
import { ProjectSection } from "../components/Profile/ProjectSection";
import { BooksInfo } from "../components/Profile/BooksInfo";
import { Introduce } from "../components/Profile/Introduce";

export function Profile() {
  return (
    <main css={profileContainer}>
      <Info />
      <Introduce />
      <Career />
      <TechStack />
      <Education />
      <ProjectSection />
      <BooksInfo />
    </main>
  );
}

const profileContainer = css`
  ${mainSectionContainer};
`;
