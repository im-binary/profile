// import { Info } from "./Resume/Info";
// import { Career } from "./Resume/Career";
// import { TechStack } from "./Resume/TechStack";
// import { Education } from "./Resume/Education";
// import { ProjectSection } from "./Resume/ProjectSection";
// import { BooksInfo } from "./Resume/BooksInfo";
// import { Introduce } from "./Resume/Introduce";
// import { Contribute } from "./Resume/Contribute";
import { lazy } from "react";

export const ResumeComponentMap = {
  Info: lazy(() => import("./Resume/Info")),
  Introduce: lazy(() => import("./Resume/Introduce")),
  Career: lazy(() => import("./Resume/Career")),
  Contribute: lazy(() => import("./Resume/Contribute")),
  TechStack: lazy(() => import("./Resume/TechStack")),
  Education: lazy(() => import("./Resume/Education")),
  ProjectSection: lazy(() => import("./Resume/ProjectSection")),
  BooksInfo: lazy(() => import("./Resume/BooksInfo")),
};

export const ResumeComponent = ({ name }) => {
  const Component = ResumeComponentMap[name];

  return <Component />;
};
