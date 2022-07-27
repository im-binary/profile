import React, { useEffect, useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize30, garyTitleBorderBottom } from "../../style/main";
import axios from "axios";

export default function BooksInfo() {
  const [bookList, setBookList] = useState([]);
  const bookAPIurl = "/data/Profile/bookInfoData.json";

  const getBookInfoData = async () => {
    await axios.get(bookAPIurl).then((res) => {
      const dataList = res.data.bookInfoData;
      setBookList(dataList);
    });
  };

  useEffect(() => {
    getBookInfoData();
  }, []);

  return (
    <article css={booksInfoContainer}>
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

const booksInfoContainer = css`
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
      box-shadow: rgb(15 15 15 / 10%) 2px 4px 4px 0px, rgb(15 15 15 / 10%) 4px 4px 10px;
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
