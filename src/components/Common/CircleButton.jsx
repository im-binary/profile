/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTheme } from "../../hooks/theme";
import { darkFontColor, lightFontColor, navDarkBackgroundColor, navLightBackgroundColor } from "../../style/main";

export default function CircleButton({ className, onClick, children, light, dark }) {
  const [theme] = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <Button
      onClick={onClick}
      className={[className, theme === "light" ? "light" : "dark"].join(" ")}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children || (
        <>
          {(() => {
            switch (`theme-${theme}-hover-${hover}`) {
              case "theme-light-hover-true":
                return dark;
              case "theme-light-hover-false":
                return light;
              case "theme-dark-hover-true":
                return light;
              case "theme-dark-hover-false":
                return dark;
              default:
                return light;
            }
          })()}
        </>
      )}
    </Button>
  );
}

const Button = styled.button(css`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: block;
  cursor: pointer;

  img {
    width: 20px;
    display: block;
    margin: 0 auto;
  }

  &.light {
    background-color: ${navLightBackgroundColor};
  }
  &.dark {
    background-color: ${navDarkBackgroundColor};
  }

  &:hover {
    &.light {
      background-color: ${navDarkBackgroundColor};
      color: ${darkFontColor};
    }
    &.dark {
      background-color: ${navLightBackgroundColor};
      color: ${lightFontColor};
    }
  }
`);
