/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export function ProjectPart({ projectDetailsData }) {
  if (projectDetailsData == null) {
    return <div>로딩중</div>;
  }

  const { part: projectPart } = projectDetailsData;
  console.log(projectPart);

  return (
    <ul css={css``}>
      {projectPart.map((project) => (
        <PartTitleList key={`project-part-${project.id}`}>
          {project.title}
          <ul>
            {project.contentList.map((content) => (
              <PartContentList key={`project-content-${content.id}`}>{content.summary}</PartContentList>
            ))}
          </ul>
        </PartTitleList>
      ))}
    </ul>
  );
}

const PartTitleList = styled.li`
  list-style: inside;
  list-style-type: "✨";
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 10px;

  &::before {
    content: "";
    padding-left: 6px;
  }
`;

const PartContentList = styled.li`
  list-style-type: disc;
  list-style: inside;
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: normal;
`;
