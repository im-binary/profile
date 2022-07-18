import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
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
  border: 2px solid;
  border-radius: 20px;
  height: calc(100% - 210px);
  margin-top: 10px;
  padding: 20px;

  li {
    margin: 10px 0;
  }

  li .active {
    color: pink;
  }
`;
