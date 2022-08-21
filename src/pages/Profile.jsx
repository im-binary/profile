import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import Info from "../components/Profile/Info";
import Career from "../components/Profile/Career";
import TechStack from "../components/Profile/TechStack";
import Education from "../components/Profile/Education";
import ProjectCard from "../components/Profile/ProjectCard";
import BooksInfo from "../components/Profile/BooksInfo";
import Introduce from "../components/Profile/Introduce";

export default function Profile() {
  return (
    <main css={profileContainer}>
      <Info />
      <Introduce />
      <Career />
      <TechStack />
      <Education />
      <ProjectCard />
      <BooksInfo />
    </main>
  );
}

const profileContainer = css`
  ${mainSectionContainer};
`;
