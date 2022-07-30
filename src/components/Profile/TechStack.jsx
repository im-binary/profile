import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, mainColor, boxTextColor } from "../../style/main";
import { useFetch } from "../../hooks/fetch";

export default function TechStack() {
  const fetchUrl = "/data/Profile/techStackData.json";
  const fetchStorage = "techStackData";

  const { dataList: techStackData } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={techStackContainer}>
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

const techStackContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
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
