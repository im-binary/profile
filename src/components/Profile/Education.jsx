import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  contentFontSize16,
  contentFontSize30,
  garyTitleBorderBottom,
  mainColor,
  subColor,
  whiteTitleBorderBottom,
} from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";

export default function Education() {
  const fetchUrl = "/data/Profile/educationData.json";
  const fetchStorage = "educationData";
  const [theme] = useTheme();

  const { dataList: educatioList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={educationContainer(theme)}>
      <h2>교육</h2>
      <ul>
        {educatioList.map((item) => (
          <React.Fragment key={`education-${item.id}`}>
            <li>{item.course}</li>
            <li>{item.period}</li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

const educationContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${contentFontSize16};
  }

  li {
    padding: 4px 6px;
    display: flex;
    align-items: center;
  }

  li:first-of-type,
  li:nth-of-type(2) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(4n - 1),
  li:nth-of-type(4n) {
    background-color: rgb(221 221 221 / 16%);
  }

  li:nth-of-type(4n + 1):not(li:first-of-type),
  li:nth-of-type(4n + 2):not(li:nth-of-type(2)) {
    background-color: ${subColor};
  }
`;
