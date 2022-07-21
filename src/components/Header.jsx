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
  /* border: 1px solid; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    ${contentFontSize16};
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
    /* border: 1px solid; */
    display: inline-block;
    padding: 15px 30px;
  }
`;
