import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize30, garyTitleBorderBottom, mainColor } from "../style/main";
import { URLs } from "../constant";

export default function BooksInfo() {
  return (
    <article css={booksInfoContainer}>
      <h2>독서</h2>
      <div>
        <section onClick={() => window.open(URLs.functionalCodingBook, "_blank")}>
          <img src='images/functional-coding.jpeg' alt='쏙쏙 들어오는 함수형 코딩' />
        </section>
        <section>
          <img src='images/functional-coding.jpeg' alt='쏙쏙 들어오는 함수형 코딩' />
        </section>
        <section>
          <img src='images/functional-coding.jpeg' alt='쏙쏙 들어오는 함수형 코딩' />
        </section>
      </div>
    </article>
  );
}

const booksInfoContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  div {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

    section {
      border-radius: 10px;
      border-width: 1.5px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: rgb(15 15 15 / 10%) 2px 4px 4px 0px, rgb(15 15 15 / 10%) 4px 4px 10px;
      transition: all 0.3s ease-in-out;
      transform: translateY(0);

      &:hover {
        background-color: ${mainColor};
        transition: all 0.3s ease-in-out;
        transform: translateY(-5px);
      }
      img {
        width: 100%;
        display: block;
      }
    }
  }
`;
