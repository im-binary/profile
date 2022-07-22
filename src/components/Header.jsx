import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { contentFontSize16, mainColor } from "../style/main";

export default function Header() {
  return (
    <nav css={navContainer}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
const navContainer = css`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    ${contentFontSize16};
    border: 1px solid;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    cursor: pointer;

    &:hover {
      background-color: ${mainColor};
    }

    .active {
      background-color: ${mainColor};
      border-bottom: 2px solid;
    }
  }

  a {
    display: inline-block;
    padding: 15px 30px;
  }
`;
