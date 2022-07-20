import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { garyTitleBorderBottom, contentFontSize, garyNomalBorderBottom } from "../style/main";

export default function Career() {
  return (
    <article css={careerContainer}>
      <h2>경력</h2>
      <ul>
        <li>회사명</li>
        <li>근무기간</li>
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
  }

  ul {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 15px;
    ${contentFontSize}
    padding-top: 20px;

    li:first-of-type,
    li:nth-of-type(2) {
      ${garyNomalBorderBottom}
    }

    li:nth-of-type(2n + 1) {
      margin: 0 0 0 20px;
    }
  }
`;
