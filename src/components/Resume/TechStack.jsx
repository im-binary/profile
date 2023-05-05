/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { fontSize, garyTitleBorderBottom, boxTextColor, whiteTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";
import { TranslateBold } from "../util/TranslateBold";

export default function TechStack() {
  const fetchUrl = "/data/resume/techStackData.json";
  const fetchStorage = "techStackData";
  const [theme] = useTheme();

  const { dataList: techStackData } = useFetch(fetchUrl, fetchStorage);

  return (
    <article name='TechStack' css={techStackContainer(theme)}>
      <h2>🤹‍♀️ 기술 스택</h2>
      <ul>
        {techStackData.map((item) => (
          <React.Fragment key={`techStack-${item.id}`}>
            <li>
              <img src={item.techStackImage} alt={item.techStackName} />
              <div>
                <p
                  css={css`
                    font-weight: bold;
                    color: ${boxTextColor};
                  `}
                >
                  {item.techStackName}
                </p>
                <TranslateBold>{item.techDescription}</TranslateBold>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

const techStackContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${fontSize.contentFontSize30}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }

  ul {
    padding: 20px 0;
    gap: 14px;
    ${fontSize.contentFontSize16};
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.5;
    word-break: keep-all;

    li {
      display: grid;
      grid-template-columns: 50px 1fr;
      padding: 10px 0;
      align-items: center;
      gap: 10px;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        justify-self: center;
      }

      p {
        width: 100%;
      }

      p + p {
        margin-top: 5px;
      }
    }
  }
`;
