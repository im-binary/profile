/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NewRabbit from "./NewRabbit";
import Rabbit from "./Rabbit";
import { fontSize } from "../../../style/main";

export default function RabbitComponent() {
  return (
    <div css={rabbitsCss}>
      <div>
        <Rabbit />
        <p css={rabbitTitleCss}>1세대 토끼</p>
      </div>
      <div>
        <NewRabbit />
        <p css={rabbitTitleCss}>2세대 토끼</p>
      </div>
    </div>
  );
}

const rabbitTitleCss = css`
  ${fontSize.contentFontSize16};
  color: #000;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`;

export const rabbitsCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
