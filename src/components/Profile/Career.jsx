import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { garyTitleBorderBottom, fontSize, mainColor, subColor, whiteTitleBorderBottom } from "../../style/main";
import { useTheme } from "../../hooks/theme";

export function Career() {
  const [theme] = useTheme();

  return (
    <article css={careerContainer(theme)}>
      <h2>경력</h2>
      <ul>
        <li>회사명</li>
        <li>근무기간</li>
        <li>없음</li>
        <li>🌹</li>
        <li>없음</li>
        <li>저의 경력이,,</li>
        <li>없음</li>
        <li>되어주세요</li>
        <li>없음</li>
        <li>🌹</li>
      </ul>
    </article>
  );
}

const careerContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${fontSize.contentFontSize16}

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
  }
`;
