import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import Info from "../components/Profile/Info";
import Career from "../components/Profile/Career";
import TechStack from "../components/Profile/TechStack";
import Education from "../components/Profile/Education";
import ProjectInfo from "../components/Profile/ProjectInfo";
import BooksInfo from "../components/Profile/BooksInfo";
import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state);

  return (
    <main css={profileContainer}>
      <Info state={state} />
      <Career />
      <TechStack />
      <Education />
      <ProjectInfo state={state} />
      <BooksInfo state={state} />
    </main>
  );
}

const profileContainer = css`
  ${mainSectionContainer};
`;
