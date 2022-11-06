import { Global, css } from "@emotion/react";
import { darkBackgroundColor, darkFontColor, lightBackgroundColor, lightFontColor } from "./main";
import { useTheme } from "../hooks/theme";

export function GlobalStyle() {
  const [theme] = useTheme();

  return <Global styles={style(theme)} />;
}

const style = (theme) => css`
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800");

  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${theme === "light" ? lightBackgroundColor : darkBackgroundColor};
    color: ${theme === "light" ? lightFontColor : darkFontColor};
    font-family: Nanum Gothic;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    appearance: none;
  }

  .print {
    display: none;
  }

  @page {
    margin: 40px 20px 100px 20px;
    padding: 100px 0;
  }

  @media print {
    head > title {
      opacity: hidden !important;
    }

    body {
      position: relative;
      padding: 0 20px;
    }

    .print {
      display: unset !important;
    }

    .no-print {
      display: none !important;
    }

    * {
      font-family: unset !important;
      font-weight: 400 !important;
      box-shadow: unset !important;
      color: black !important;
    }
  }
`;
