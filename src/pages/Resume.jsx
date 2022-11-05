/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import { Info } from "../components/Resume/Info";
import { Career } from "../components/Resume/Career";
import { TechStack } from "../components/Resume/TechStack";
import { Education } from "../components/Resume/Education";
import { ProjectSection } from "../components/Resume/ProjectSection";
import { BooksInfo } from "../components/Resume/BooksInfo";
import { Introduce } from "../components/Resume/Introduce";
import { Contribute } from "../components/Resume/Contribute";

export function Resume() {
  return (
    <main css={resumeContainer}>
      <Info />
      <Introduce />
      <Career />
      <Contribute />
      <TechStack />
      <Education />
      <ProjectSection />
      <BooksInfo />
    </main>
  );
}

const resumeContainer = css`
  ${mainSectionContainer};
`;
