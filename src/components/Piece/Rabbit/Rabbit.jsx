/** @jsxImportSource @emotion/react */
import { rabbitCss, rabbitEarCss, rabbitFaceCss } from "./styles";

export default function Rabbit() {
  return (
    <div>
      <div css={rabbitCss}>
        <div css={rabbitEarCss}>
          <div></div>
        </div>
        <div css={rabbitEarCss}>
          <div></div>
        </div>
        <div css={rabbitFaceCss}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
