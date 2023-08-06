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
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    aspect-ratio: 1/1;
    transition: all 0.5s;
  }

  &:hover {
    & > img {
      transform: scale(1.05);
      transition: all 0.5s;
    }
  }
`;
