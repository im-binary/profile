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

export default function Info() {
  const [theme] = useTheme();

  return (
    <article css={infoContainer(theme)}>
      <img src='https://avatars.githubusercontent.com/u/76990149?v=4' alt='프로필 고양이 사진' />
      <h1>
        전이진 (
        <a href={URLs.github} target='_blank' rel='noreferrer'>
          @pongdang
        </a>
        )
      </h1>
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
  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
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

  p {
    ${theme === "light" ? grayBorder : whiteBorder};
    border-radius: 20px;
    padding: 20px;
  }

  section {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    line-height: 1.5;
    ${contentFontSize16};
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
