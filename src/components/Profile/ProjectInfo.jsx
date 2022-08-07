import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  garyTitleBorderBottom,
  contentFontSize16,
  contentFontSize30,
  mainColor,
  boxTextColor,
  lightBoxShadow,
  darkBoxShadow,
} from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";

export default function ProjectInfo() {
  const fetchUrl = "/data/Profile/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const [theme] = useTheme();

  const { dataList: projectList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={projectInfoContainer(theme)}>
      <h2>프로젝트</h2>
      <div>
        {projectList.map((item) => (
          <React.Fragment key={`project-${item.id}`}>
            <a href={item.repositoryLink} target='_blank' rel='noreferrer'>
              <section>
                <img src={item.projectImage} alt='' />
                <div>
                  <p>{item.name}</p>
                  <p>{item.period}</p>
                  <ul className='tech-stack'>
                    {item.teckStack.name.map((x, index) => (
                      <li key={`techStack-${index}`}>{x}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </a>
          </React.Fragment>
        ))}
      </div>
    </article>
  );
}

const projectInfoContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${garyTitleBorderBottom};
    ${contentFontSize30}
  }

  div {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;

    section {
      border-radius: 10px;
      border-width: 1.5px;
      overflow: hidden;
      ${contentFontSize16};
      cursor: pointer;
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
      transition: all 0.3s ease-in-out;
      transform: translateY(0);

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }

      img {
        width: 100%;
      }

      p:first-of-type {
        font-weight: bold;
        background-color: ${mainColor};
        display: inline-block;
      }

      p {
        margin: 0 20px;
      }
    }
  }

  .tech-stack {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 20px;

    li {
      padding: 3px 6px;
      background-color: ${mainColor};
      color: ${boxTextColor};
      border-radius: 3px;
    }
  }
`;
