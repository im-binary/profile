import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../../constant";
import { contentFontSize16, garyNomalBorderBottom, grayBorder, contentFontSize40, mainColor } from "../../style/main";

export default function Info() {
  return (
    <article css={infoContainer}>
      <img src='https://avatars.githubusercontent.com/u/76990149?v=4' alt='프로필 고양이 사진' />
      <h1>Profile | 전이진</h1>
      <section>
        <p className='description'>
          <span>🙌</span>
          <span>
            프론트엔드 개발자를 지망하고 있는 전이진입니다.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quas obcaecati nisi maxime facilis et.
          </span>
        </p>
        <ul>
          <li>
            <a href={URLs.email} target='_blank' rel='noreferrer'>
              ✉️ <span>pongpong0121@kakao.com</span>
            </a>
          </li>
          <li>
            <a href={URLs.github} target='_blank' rel='noreferrer'>
              👩‍💻 <span>Github</span>
            </a>
          </li>
          <li>
            <a href={URLs.velog} target='_blank' rel='noreferrer'>
              ✏️ <span>Velog</span>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

const infoContainer = css`
  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  h1 {
    margin: 40px 0;
    ${contentFontSize40}
  }

  p {
    ${grayBorder}
    border-radius: 20px;
    padding: 20px;
  }

  section {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    line-height: 1.5;
    ${contentFontSize16}
  }

  .description {
    width: 60%;
    display: flex;
    align-items: center;
    gap: 10px;

    span:first-of-type {
      height: 100%;
      margin-top: 14px;
    }
  }

  ul {
    width: 40%;
    padding: 20px;
    overflow: scroll;

    li {
      margin: 4px 0;

      a {
        &:hover {
          background-color: ${mainColor};
        }
      }

      a span {
        margin-right: 10px;
        ${garyNomalBorderBottom}
      }
    }
  }

  // 817px 이하일 때 미디어 쿼리 작성
`;