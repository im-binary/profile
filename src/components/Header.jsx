import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import {
  fontSize,
  darkBackgroundColor,
  lightBackgroundColor,
  mainColor,
  navDarkBackgroundColor,
  navLightBackgroundColor,
} from "../style/main";
import { useTheme } from "../hooks/theme";

export default function Header() {
  const [theme] = useTheme();

  return (
    <nav css={navContainer(theme)}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className='github-repository-link'>
          <button
            className='github-repository-button'
            onClick={() => {
              window.open("https://github.com/pongdang/profile", "_blank");
            }}
          >
            {theme === "light" ? (
              <img src='/images/icons/github-light-icon.png' alt='' />
            ) : (
              <img src='/images/icons/github-dark-icon.png' alt='' />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
const navContainer = (theme) => css`
  background-color: ${theme === "light" ? navLightBackgroundColor : navDarkBackgroundColor};
  font-family: "GangwonEduPowerExtraBoldA";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    ${fontSize.contentFontSize16};
    margin: 16px 16px 0 16px;
  }

  li {
    cursor: pointer;
    border-width: 1.8px 1.8px 0px 1.8px;
    border-style: solid;
    border-radius: 10px 10px 0 0;

    &:hover {
      background-color: ${mainColor};
    }

    .active {
      background-color: ${theme === "light" ? lightBackgroundColor : darkBackgroundColor};
    }
  }

  li + li {
    margin-left: 6px;
  }

  li.github-repository-link {
    margin-left: auto;
    align-self: flex-end;
    padding: 8px 16px;

    button {
      cursor: pointer;
    }

    img {
      vertical-align: bottom;
    }
  }

  a {
    display: inline-block;
    padding: 15px 30px;
    border-radius: 10px 10px 0 0;
  }
`;
