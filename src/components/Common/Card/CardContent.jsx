/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function CardContent({ ready, children, ...props }) {
  return (
    <div css={cardContentCss} {...props}>
      {children}
    </div>
  );
}

const cardContentCss = css`
  position: relative;
  margin-top: 20px;

  & > * {
    width: 100%;
  }
`;
