import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../../constant";
import {
  contentFontSize16,
  contentFontSize40,
  grayBorder,
  graytNomalBorderBottom,
  mainColor,
  whiteBorder,
  whiteNomalBorderBottom,
} from "../../style/main";
import { useTheme } from "../../hooks/theme";
import UpdateDate from "../Common/UpdateDate";
import Hits from "../Common/Hits";

export default function Info() {
  const [theme] = useTheme();

  return (
    <article css={infoContainer(theme)}>
      <div className='profile'>
        <img src='/images/my-image.jpeg' alt='전이진 프로필 사진' />
      </div>
      <h1>
        전이진 (
        <a href={URLs.github} target='_blank' rel='noreferrer'>
          @pongdang
        </a>
        )
      </h1>

      <Hits />

      <UpdateDate yyyymmdd={"20221015"} />

      <section>
        <p className='description'>
          <span>🙌</span>
          <span>
            작성된 코드에 쉽게 만족하지 않고 더 나은 방향을 끊임없이, 만족할 때까지 포기하지 않고 모색하는 프론트엔드
            개발자가 되고 싶습니다.
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

const infoContainer = (theme) => css`
  div.profile {
    text-align: center;
    width: 256px;
    height: 256px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  h1 {
    font-family: "GangwonEduPowerExtraBoldA";
    letter-spacing: 2px;
    margin: 40px 0;
    ${contentFontSize40};

    a {
      &:hover {
        color: ${theme === "light" ? "#ffc23a" : "#80879d"};
      }
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    line-height: 1.5;
    ${contentFontSize16};
  }

  .description {
    border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
    border-left-width: 10px;
    border-left-style: solid;
    padding: 10px 20px;
    font-weight: 600;

    width: 60%;
    display: flex;
    gap: 10px;

    span:first-of-type {
      height: 100%;
    }
  }

  ul {
    width: 40%;
    overflow: scroll;
    border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
    border-left-width: 10px;
    border-left-style: solid;
    padding: 10px 20px;

    li {
      margin: 4px 0;

      a {
        &:hover {
          background-color: ${mainColor};
        }
      }

      a span {
        margin-right: 10px;
        ${theme === "light" ? graytNomalBorderBottom : whiteNomalBorderBottom};
      }
    }
  }

  @media (max-width: 743px) {
    img {
      display: block;
      margin: 0 auto;
    }

    section {
      flex-wrap: wrap;
      justify-content: center;

      p.description,
      ul {
        width: 100%;
      }

      p.description span:first-of-type {
        margin-top: -4px;
      }
    }
  }
`;
