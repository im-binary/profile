import React from "react";
import { URLs } from "../../constant";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { garyTitleBorderBottom, contentFontSize16, contentFontSize30, mainColor, boxTextColor } from "../../style/main";

export default function ProjectInfo() {
  return (
    <article css={projectInfoContainer}>
      <h2>프로젝트</h2>
      <div>
        <a href={URLs.pongdangToday} target='_blank' rel='noreferrer'>
          <section>
            <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
            <div>
              <p>🏠 Vanilla JS로 구현한 블로그</p>
              <p>2021.06.22 ~ 2021.09.02</p>
              <ul className='tech-stack'>
                <li>JavaScript</li>
              </ul>
            </div>
          </section>
        </a>
        <a href={URLs.pongdangWorld} target='_blank' rel='noreferrer'>
          <section>
            <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
            <div>
              <p>🏠 React로 구현한 블로그</p>
              <p>2022.01.28 ~ 2022.03.29</p>
              <ul className='tech-stack'>
                <li>React</li>
                <li>React Redux</li>
                <li>emotion</li>
              </ul>
            </div>
          </section>
        </a>
        <a href={URLs.pongdangDiary} target='_blank' rel='noreferrer'>
          <section>
            <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
            <div>
              <p>📓 다이어리</p>
              <p>2022.06.03 ~ 2022.07.09</p>
              <ul className='tech-stack'>
                <li>Next.js</li>
                <li>React</li>
                <li>styled-components</li>
              </ul>
            </div>
          </section>
        </a>
        <a href={URLs.searchJJAL} target='_blank' rel='noreferrer'>
          <section>
            <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
            <div>
              <p>📷 Search JJAL</p>
              <p>2022.07.18</p>
              <ul className='tech-stack'>
                <li>React</li>
                <li>styled-components</li>
              </ul>
            </div>
          </section>
        </a>
      </div>
    </article>
  );
}

const projectInfoContainer = css`
  margin: 30px 0;

  h2 {
    ${garyTitleBorderBottom};
    ${contentFontSize30}
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
      ${contentFontSize16};
      cursor: pointer;
      box-shadow: rgb(15 15 15 / 10%) 2px 4px 4px 0px, rgb(15 15 15 / 10%) 4px 4px 10px;
      transition: all 0.3s ease-in-out;
      transform: translateY(0);
      opacity: 0.7;

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-5px);
        opacity: 1;
      }

      img {
        width: 100%;
      }

      p:first-of-type {
        font-weight: bold;
        background-color: ${mainColor};
        display: inline-block;
      }
    }
  }

  .tech-stack {
    display: flex;
    gap: 10px;

    li {
      padding: 3px 6px;
      background-color: ${mainColor};
      color: ${boxTextColor};
      border-radius: 3px;
    }
  }
`;
