import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { contentFontSize16, mainColor } from "../style/main";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "../redux/actions/themeAction";

export default function Header() {
  const state = useSelector((state) => state);
  const [theme, setTheme] = useState(state);

  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(changeThemeMode(!theme));
    setTheme(!theme);
  };

  console.log(state);
  return (
    <nav css={navContainer}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className='themeButton' onClick={handleChangeMode}>
          {state ? "🌝" : "🌚"}
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

    &.themeButton {
      font-size: 3rem;
      margin-left: 2px;
    }
  }

  a {
    display: inline-block;
    padding: 15px 30px;
  }
`;
