import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize30, darkBoxShadow, garyTitleBorderBottom, lightBoxShadow } from "../../style/main";
import { useFetch } from "../../hooks/fetch";

export default function BooksInfo({ state }) {
  const fetchUrl = "/data/Profile/bookInfoData.json";
  const fetchStorage = "bookInfoData";

  const { dataList: bookList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={booksInfoContainer(state)}>
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

const booksInfoContainer = (state) => css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  div {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;

    section {
      border-radius: 10px;
      border-width: 1.5px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: ${state ? lightBoxShadow : darkBoxShadow};
      transition: all 0.3s ease-in-out;
      transform: translateY(0);

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }

      img {
        width: 100%;
        display: block;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
