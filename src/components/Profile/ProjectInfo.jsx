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
  whiteTitleBorderBottom,
  subColor,
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
      <div className='container'>
        {projectList.map((item) => (
          <section key={`project-${item.id}`}>
            <a href={item.projectLink} target='_blank' rel='noreferrer'>
              <img src={item.projectImage} alt='' />
            </a>
            <div>
              <p>{item.name}</p>
              <p>{item.period}</p>
              <p>프로젝트 설명</p>
              <ul className='tech-stack'>
                {item.teckStack.name.map((x, index) => (
                  <li key={`techStack-${index}`}>{x}</li>
                ))}
              </ul>
              <button>
                <a href={item.repositoryLink}>repository 보러가기</a>
              </button>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

const projectInfoContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${contentFontSize30}
  }

  .container {
    margin: 20px 0;
    @media (max-width: 878px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }

    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      ${contentFontSize16}
      border-radius: 20px;
      overflow: hidden;
      margin-top: 20px;
      transform: translateY(0px);
      transition: all 0.3s ease-in-out;
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }

      @media (max-width: 878px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 0;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }

      div {
        padding: 20px;

        p + p {
          margin: 10px 0;
        }

        p:first-of-type {
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
        }

        p:nth-of-type(2) {
          ${contentFontSize16}
          font-style: italic;
          text-align: end;
        }

        p:nth-of-type(3) {
          ${contentFontSize16}
        }

        button {
          display: block;
          font-size: 1.5rem;
          margin-left: auto;
          border: none;
          padding: 4px 6px;
        }

        .tech-stack {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0;

          li {
            ${contentFontSize16}
            padding: 3px 6px;
            background-color: ${mainColor};
            color: ${boxTextColor};
            border-radius: 3px;
          }
        }
      }
    }

    section:nth-of-type(2n - 1) {
      background-color: rgb(221 221 221 / 16%);
      border: 1px solid rgb(221 221 221 / 16%);
    }

    section:nth-of-type(2n) {
      background-color: ${subColor};
      border: 1px solid ${subColor};
    }
  }
`;
