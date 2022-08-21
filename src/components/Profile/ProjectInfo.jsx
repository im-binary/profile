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
  navLightBackgroundColor,
  navDarkBackgroundColor,
  darkFontColor,
  lightFontColor,
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
              <p>{item.summary}</p>
              <ul className='tech-stack'>
                {item.teckStack.name.map((x, index) => (
                  <li key={`techStack-${index}`}>{x}</li>
                ))}
              </ul>
              <div>
                <button>자세히 보기</button>
                <button>
                  <a href={item.repositoryLink} target='_blank' rel='noreferrer'>
                    repository 보러가기
                  </a>
                </button>
              </div>
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
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};

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
        position: relative;

        p + p {
          margin: 16px 0;
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
          height: 80px;
          display: flex;
          align-items: center;
          line-height: 1.5;
        }

        div {
          display: flex;
          gap: 10px;
          justify-content: space-between;
          align-items: center;
          padding: 0;

          button {
            display: block;
            font-size: 1.5rem;
            padding: 10px 12px;
            border: none;
            border-radius: 20px;
            background-color: ${theme === "light" ? navLightBackgroundColor : navDarkBackgroundColor};
            cursor: pointer;

            &:hover {
              background-color: ${theme === "light" ? navDarkBackgroundColor : navLightBackgroundColor};
              color: ${theme === "light" ? darkFontColor : lightFontColor};
            }
          }
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin: 10px 0 20px;

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
