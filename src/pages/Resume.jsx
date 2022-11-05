/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import { ResumeComponent } from "../components/ResumeComponent";

const defaultArray = [
  "Info",
  "Introduce",
  "Career",
  "TechStack",
  "Education",
  "ProjectSection",
  "Contribute",
  "BooksInfo",
];

export function Resume() {
  return (
    <main css={resumeContainer}>
      {defaultArray.map((x) => (
        <ResumeComponent key={x} name={x} />
      ))}
    </main>
  );
}

const resumeContainer = css`
  ${mainSectionContainer};
`;
