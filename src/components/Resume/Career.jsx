/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  garyTitleBorderBottom,
  fontSize,
  mainColor,
  subColor,
  whiteTitleBorderBottom,
} from '../../style/main';
import { useTheme } from '../../hooks/theme';

export default function Career() {
  const [theme] = useTheme();

  return (
    <article css={careerContainer(theme)} name="Career">
      <h2>💍 경력</h2>
      <ul>
        <li>회사명 / 직무명</li>
        <li>근무기간</li>
        {/* 구분 */}
        <li>비바리퍼블리카 / UX Engineer Assistant</li>
        <li>2022.12.19 ~ 2024.03.15</li>
      </ul>
    </article>
  );
}

const careerContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === 'light' ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  ul {
    padding: 20px 0;
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
