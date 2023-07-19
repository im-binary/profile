/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function CardTitle({ as = "p", children, ...restProps }) {
  const Component = as;

  return (
    <Component {...restProps} css={cardTitleCss}>
      {children}
    </Component>
  );
}

const cardTitleCss = css`
  word-break: keep-all;
`;
