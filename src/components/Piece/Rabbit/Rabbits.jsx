/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NewRabbit from "./NewRabbit";
import Rabbit from "./Rabbit";
import { fontSize } from "../../../style/main";

export default function RabbitComponent() {
  return (
    <>
      <Rabbit />
      <p css={rabbitTitleCss}>1세대 토끼</p>

      <NewRabbit />
      <p css={rabbitTitleCss}>2세대 토끼</p>
    </>
  );
}

const rabbitTitleCss = css`
  ${fontSize.contentFontSize16};
  color: #000;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`;
