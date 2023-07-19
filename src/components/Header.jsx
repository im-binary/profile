/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  fontSize,
  darkBackgroundColor,
  lightBackgroundColor,
  mainColor,
  navDarkBackgroundColor,
  navLightBackgroundColor,
} from "../style/main";
import { useTheme } from "../hooks/theme";
import { GithubIcon } from "./Resume/GithubIcon";

export function Header() {
  const [theme] = useTheme();
  const location = useLocation();

  const resume = location.pathname === "/resume";

  const downloadReusmePdf = () => {
    const title = window.document.title;

    window.addEventListener("afterprint", () => {
      window.document.title = title;
    });

    window.document.title = "　";
    window.print();
  };

  return (
    <nav css={navContainer(theme)} className='no-print'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/resume'>Resume</NavLink>
        </li>
        <li>
          <NavLink to='/piece'>Piece</NavLink>
        </li>

        {resume && (
          <li
            css={css`
              margin-left: auto;
            `}
          >
            <button
              css={css`
                padding: 15px 10px;
                cursor: pointer;
              `}
              onClick={downloadReusmePdf}
            >
              pdf
            </button>
          </li>
        )}
        <li className={`github-repository-link ${!resume ? "home" : ""}`}>
          <a href='https://github.com/pongdang/profile' target='_blank' rel='noreferrer'>
            <GithubIcon />
          </a>
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
    gap: 6px;
    ${fontSize.contentFontSize16};
    margin: 16px 16px 0 16px;
  }

  li {
    cursor: pointer;
    border-radius: 10px 10px 0 0;
    box-shadow: ${theme === "light" ? "2px -2px 3px 0px rgb(200 200 200)" : "2px 0px 7px 0px rgb(24 24 24)"};

    &:hover {
      background-color: ${mainColor};
      box-shadow: none;
    }

    .active {
      background-color: ${theme === "light" ? lightBackgroundColor : darkBackgroundColor};
    }
  }

  li.github-repository-link {
    align-self: flex-end;

    &.home {
      margin-left: auto;
    }

    a {
      display: block;
      padding: 9px 12px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  a:not(li.github-repository-link a) {
    display: block;
    padding: 15px 30px;
    border-radius: 10px 10px 0 0;

    @media (max-width: 420px) {
      padding: 15px 10px;
    }
  }
`;
