import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/theme";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, whiteTitleBorderBottom } from "../../style/main";

export default function Introduce() {
  const [theme] = useTheme();

  return (
    <article css={introduce(theme)}>
      <h2>Hello</h2>
      <section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis aut dolorum cumque voluptatum
          soluta cupiditate, iste, est totam ducimus eos tempora veniam pariatur laborum? Sit odit earum nulla ab!
        </p>
      </section>
    </article>
  );
}

const introduce = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${contentFontSize30}
  }

  section {
    margin: 20px;
    ${contentFontSize16};
  }
`;
