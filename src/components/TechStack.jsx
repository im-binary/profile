import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, mainColor, boxTextColor } from "../style/main";

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
        <li>Emotion, styled-components</li>
      </ul>
    </article>
  );
}

const techStackContainer = css`
  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: flex;
    gap: 10px;

    li {
      padding: 3px 6px;
      ${contentFontSize16}
      background-color:${mainColor};
      color: ${boxTextColor};
      border-radius: 3px;
    }
  }
`;
