/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../../constant";
import {
  fontSize,
  grayBorder,
  graytNomalBorderBottom,
  mainColor,
  whiteBorder,
  whiteNomalBorderBottom,
} from "../../style/main";
import { useTheme } from "../../hooks/theme";
import { UpdateDate } from "../Common/UpdateDate";
import { Hits } from "../Common/Hits";

export default function Info() {
  const [theme] = useTheme();

  return (
    <article name='Info' css={infoContainer(theme)}>
      <Hits />

      <UpdateDate yyyymmdd={"20221111"} />

      <section>
        <p className='description'>
          <span>🙌</span>
          <span>어제보다 오늘이 더 나은 신입 프론트엔드 개발자, 전이진입니다.</span>
        </p>

        <ul>
          <li>
            <a href={URLs.email} target='_blank' rel='noreferrer'>
              ✉️ <span>pongpong0121@kakao.com</span>
            </a>
          </li>
          <li>
            <a href={URLs.github} target='_blank' rel='noreferrer'>
              👩‍💻 <span className='no-print'>GitHub</span>
              <span className='print'>{URLs.github}</span>
            </a>
          </li>
          <li>
            <a href={URLs.velog} target='_blank' rel='noreferrer'>
              ✏️ <span className='no-print'>Velog</span>
              <span className='print'>{URLs.velog}</span>
            </a>
          </li>
          <li>
            <a className='print' href={URLs.velog} target='_blank' rel='noreferrer'>
              🙋‍♀️ <span className='print'>{URLs.profile}</span>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

const infoContainer = (theme) => css`
  section {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    line-height: 1.5;
    ${fontSize.contentFontSize16};
  }

  .description {
    border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
    border-left-width: 10px;
    border-left-style: solid;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 2rem;
    width: 60%;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    word-break: keep-all;
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
