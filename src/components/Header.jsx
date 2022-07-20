import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav css={navContainer}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
    </nav>
  );
}
const navContainer = css`
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    cursor: pointer;
    &:hover,
    .active {
      border-bottom: 2px solid blue;
    }
  }

  a {
    border: 1px solid;
    display: inline-block;
    padding: 10px 20px;
  }
`;
