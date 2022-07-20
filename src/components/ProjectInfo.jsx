import React from "react";
import { URLs } from "../constant";

export default function ProjectInfo() {
  return (
    <article>
      <h2>프로젝트</h2>
      <section>
        <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
        <div>
          <p>블로그</p>
          <p>2021.06.22~2021.09.02</p>
          <a href={URLs.pongdangToday} target='_blank' rel='noreferrer'>
            Github repository 보러가기
          </a>
          <ul>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>
      <section>
        <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
        <div>
          <p>블로그</p>
          <p>2022.01.28~2022.03.29</p>
          <a href={URLs.pongdangWorld} target='_blank' rel='noreferrer'>
            Github repository 보러가기
          </a>
          <ul>
            <li>React</li>
            <li>React Redux</li>
            <li>emotion</li>
          </ul>
        </div>
      </section>
      <section>
        <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
        <div>
          <p>다이어리</p>
          <p>2022.06.03~2022.07.09</p>
          <a href={URLs.pongdangDiary} target='_blank' rel='noreferrer'>
            Github repository 보러가기
          </a>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>styled-components</li>
          </ul>
        </div>
      </section>
      <section>
        <img src='https://cdn.pixabay.com/photo/2016/01/22/16/59/tiger-1156205_1280.jpg' alt='' />
        <div>
          <p>Search JJAL</p>
          <p>2022.07.18</p>
          <a href={URLs.searchJJAL} target='_blank' rel='noreferrer'>
            Github repository 보러가기
          </a>
          <ul>
            <li>React</li>
            <li>styled-components</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
