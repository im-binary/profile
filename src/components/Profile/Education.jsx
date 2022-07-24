import React, { useEffect, useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, mainColor, subColor } from "../../style/main";
import axios from "axios";

export default function Education() {
  const [educatioList, setEducationList] = useState([]);
  const educationAPIurl = "/data/educationData.json";

  const educationAPI = async () => {
    await axios.get(educationAPIurl).then((res) => {
      const dataList = res.data.educationData;
      setEducationList(dataList);
    });
  };

  useEffect(() => {
    educationAPI();
  }, []);

  return (
    <article css={educationContainer}>
      <h2>교육</h2>
      <ul>
        {educatioList.map((item) => (
          <React.Fragment key={`education-${item.id}`}>
            <li>{item.course}</li>
            <li>{item.period}</li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

const educationContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${garyTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${contentFontSize16};
  }

  li {
    padding: 2px 4px;
  }

  li:first-of-type,
  li:nth-of-type(2) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(4n + 1):not(li:first-of-type),
  li:nth-of-type(4n + 2):not(li:nth-of-type(2)) {
    background-color: ${subColor};
  }
`;
