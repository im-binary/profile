import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  contentFontSize16,
  contentFontSize30,
  garyTitleBorderBottom,
  mainColor,
  boxTextColor,
  whiteTitleBorderBottom,
} from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";

export default function TechStack() {
  const fetchUrl = "/data/Profile/techStackData.json";
  const fetchStorage = "techStackData";
  const [theme] = useTheme();

  const { dataList: techStackData } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={techStackContainer(theme)}>
      <h2>기술 스택</h2>
      <ul>
        {techStackData.map((item) => (
          <React.Fragment key={`techStack-${item.id}`}>
            <li>{item.teckStackName}</li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

const techStackContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }

  ul {
    padding: 20px;
    display: flex;
    gap: 10px;
    ${contentFontSize16};
    align-items: center;
    flex-wrap: wrap;

    li {
      padding: 3px 6px;
      background-color: ${mainColor};
      color: ${boxTextColor};
      border-radius: 3px;
    }
  }
`;
