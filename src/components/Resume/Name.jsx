/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../../constant";
import { fontSize } from "../../style/main";
import { useTheme } from "../../hooks/theme";

export default function Name() {
  const [theme] = useTheme();

  return (
    <article css={infoContainer(theme)}>
      <h1>
        전이진 (
        <a href={URLs.github} target='_blank' rel='noreferrer'>
          @pongdang
        </a>
        )
      </h1>
    </article>
  );
}

const infoContainer = (theme) => css`
  h1 {
    font-family: "GangwonEduPowerExtraBoldA";
    letter-spacing: 2px;
    margin: 40px 0;
    ${fontSize.contentFontSize40};

    a {
      &:hover {
        color: ${theme === "light" ? "#ffc23a" : "#80879d"};
      }
    }
  }
`;
