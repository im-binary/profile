import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  fontSize,
  darkBoxShadow,
  garyTitleBorderBottom,
  lightBoxShadow,
  whiteTitleBorderBottom,
} from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";

export default function BooksInfo() {
  const [theme] = useTheme();
  const fetchUrl = "/data/profile/bookInfoData.json";
  const fetchStorage = "bookInfoData";

  const { dataList: bookList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={booksInfoContainer(theme)}>
      <h2>독서</h2>
      <div>
        {bookList.map((item) => (
          <section key={`book-${item.id}`}>
            <a href={item.bookLink} target='_blank' rel='noreferrer'>
              <img src={item.bookImage} alt={item.bookName} />
            </a>
          </section>
        ))}
      </div>
    </article>
  );
}

const booksInfoContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${fontSize.contentFontSize30}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }

  div {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;

    @media (max-width: 400px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    section {
      border-radius: 10px;
      border-width: 1.5px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
      transition: all 0.3s ease-in-out;
      transform: translateY(0);

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }

      img {
        width: 100%;
        display: block;
      }
    }
  }
`;
