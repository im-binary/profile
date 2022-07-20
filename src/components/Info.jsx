import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../constant";

export default function Info() {
  return (
    <section>
      <img src='https://avatars.githubusercontent.com/u/76990149?v=4' alt='프로필 사진(고양이)' />
      <h1>전이진 | Profile</h1>
      <p>My status is ... 🐱</p>
      <p>
        <span>🙌</span> 안녕하세요! 프론트엔드 개발자를 지망하고 있는 전이진입니다.👻
      </p>
      <article>
        <ul>
          <li>
            <a href={URLs.email} target='_blank' rel='noreferrer'>
              pongpong0121@kakao.com
            </a>
          </li>
          <li>
            <a href={URLs.github} target='_blank' rel='noreferrer'>
              Github
            </a>
          </li>
          <li>
            <a href={URLs.velog} target='_blank' rel='noreferrer'>
              Velog
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
