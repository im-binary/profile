import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, mainColor, subColor } from "../../style/main";

export default function Education() {
  return (
    <article css={educationContainer}>
      <h2>교육</h2>
      <ul>
        <li>과정</li>
        <li>기간</li>
        <li>일팔공 REACT 기초반</li>
        <li>2021.12.13 ~ 2022.03.04</li>
        <li>CodeStates ing ...</li>
        <li>2022.04.25 ~</li>
      </ul>
    </article>
  );
}

const educationContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${contentFontSize16};
  }

  li {
    padding: 2px 4px;
  }

  li:first-of-type,
  li:nth-of-type(2) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(4n + 1):not(li:first-of-type),
  li:nth-of-type(4n + 2):not(li:nth-of-type(2)) {
    background-color: ${subColor};
  }
`;
