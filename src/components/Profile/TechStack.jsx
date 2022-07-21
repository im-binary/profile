import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, mainColor, boxTextColor } from "../../style/main";

export default function TechStack() {
  return (
    <article css={techStackContainer}>
      <h2>기술 스택</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Redux</li>
        <li>Emotion</li>
        <li>styled-components</li>
      </ul>
    </article>
  );
}

const techStackContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: flex;
    gap: 10px;
    ${contentFontSize16};
    align-items: center;
    flex-wrap: wrap;

    li {
      padding: 3px 6px;
      background-color: ${mainColor};
      color: ${boxTextColor};
      border-radius: 3px;
    }
  }
`;
