import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontSize, garyTitleBorderBottom, mainColor, subColor, whiteTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";

export default function Education() {
  const fetchUrl = "/data/resume/educationData.json";
  const fetchStorage = "educationData";
  const [theme] = useTheme();

  const { dataList: educatioList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article name='Education' css={educationContainer(theme)}>
      <h2>🎓 교육</h2>
      <ul>
        <li>과정</li>
        <li>기간</li>
        <li>수료증</li>
        {educatioList.map((item) => (
          <React.Fragment key={`education-${item.id}`}>
            <li>
              <a href={item.site} target='_blank' rel='noreferrer'>
                {item.course}
              </a>
            </li>
            <li
              css={css`
                white-space: pre-wrap;
              `}
            >
              {item.period}
            </li>
            <li>
              <a
                href={item.certificates}
                target='_blank'
                rel='noreferrer'
                css={css`
                  margin: 0 auto;
                `}
              >
                📎
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

const educationContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${fontSize.contentFontSize30}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }

  ul {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 60px;
    gap: 5px 10px;
    ${fontSize.contentFontSize16};
    overflow: scroll;
  }

  li {
    padding: 4px 6px;
    display: flex;
    align-items: center;
    word-break: keep-all;

    a {
      padding-bottom: 1px;
      color: ${theme === "light" ? "#005aad" : "skyblue"};
      font-weight: bold;
    }
  }

  li:first-of-type,
  li:nth-of-type(2),
  li:nth-of-type(3) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(6n),
  li:nth-of-type(6n - 1),
  li:nth-of-type(6n - 2) {
    background-color: rgb(221 221 221 / 16%);
  }

  li:nth-of-type(6n + 1):not(li:first-of-type),
  li:nth-of-type(6n + 2):not(li:nth-of-type(2)),
  li:nth-of-type(6n + 3):not(li:nth-of-type(3)) {
    background-color: ${subColor};
  }
`;
