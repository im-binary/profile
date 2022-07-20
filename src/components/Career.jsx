import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { garyTitleBorderBottom, contentFontSize16, contentFontSize30, mainColor, subColor } from "../style/main";

export default function Career() {
  return (
    <article css={careerContainer}>
      <h2>경력</h2>
      <ul>
        <li>회사명</li>
        <li>근무기간</li>
        <li>없음</li>
        <li>저의 경력이,, 되어주세요 🌹</li>
        <li>없음</li>
        <li>저의 경력이,, 되어주세요 🌹</li>
        <li>없음</li>
        <li>저의 경력이,, 되어주세요 🌹</li>
        <li>없음</li>
        <li>저의 경력이,, 되어주세요 🌹</li>
      </ul>
    </article>
  );
}

const careerContainer = css`
  margin: 30px 0;

  h2 {
    ${garyTitleBorderBottom};
    ${contentFontSize30}
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${contentFontSize16}

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
  }
`;
