/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import { useMoveScroll } from "../hooks/useMoveScroll";
import { ProjectPart } from "../components/Portfolio/ProjectPart";
import { useFetch } from "../hooks/fetch";

export function Portfolio() {
  const menuText = ["🐶 ㅅㅊ.", "🏠 pongdang의 블로그 모음"];
  const { elementRef: menuRef, onMoveToElement: onMoveToMenu } = useMoveScroll(menuText);

  const fetchUrl = "data/portfolio/projectDetailsData.json";
  const fetchStorage = "projectDetailsData";

  const { dataList: projectDetailsData } = useFetch(fetchUrl, fetchStorage);

  return (
    <main css={portfolioContainer}>
      <h1>portfolio</h1>
      <ul>
        {menuText.map((projectName, index) => (
          <li key={`project-name-${index}`}>
            <button type='button' onClick={() => onMoveToMenu(index)}>
              {projectName}
            </button>
          </li>
        ))}
      </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>

      {menuText.map((projectName, index) => (
        <div
          ref={menuRef?.current[index]}
          css={css`
            padding-top: 100px;
          `}
          key={`project-name-${index}`}
        >
          <h2>{projectName}</h2>
          <ProjectPart projectDetailsData={projectDetailsData[index]} />
        </div>
      ))}
    </main>
  );
}

const portfolioContainer = css`
  ${mainSectionContainer};
`;
