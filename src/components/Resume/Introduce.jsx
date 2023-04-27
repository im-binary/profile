/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/theme";
import { fontSize, garyTitleBorderBottom, whiteTitleBorderBottom } from "../../style/main";

export default function Introduce() {
  const [theme] = useTheme();

  return (
    <article name='Introduce' css={introduce(theme)}>
      <h2>😉 자기소개</h2>
      <section>
        <p
          css={css`
            text-indent: 16px;
          `}
        >
          안녕하세요! 어제보다 더 나은 프론트엔드 개발자, 전이진입니다. 현재 비바리퍼블리카에서 UX Engineer Assistant로
          디자이너 생산성을 위한 Framer Chrome Extension 개발과 제품의 일관성을 위한 디자인시스템 컴포넌트의 완성도를
          높이는 일을 하고 있습니다.
        </p>
        <p
          css={css`
            margin-top: 6px;
            text-indent: 16px;
          `}
        >
          개발을 하기 전에는 꽤 오랫동안 작가가 되기 위해 글을 쓰곤 했습니다. 그럴 수 있었던 것은 이 세상을 조금 더 나은
          방향으로 이끌고, 소외된 사람들을 조명해 줄 수 있는 일이라고 생각했기 때문이었습니다. 이제는 글이 아닌 개발로
          이러한 가치를 실현해 보려 합니다.
        </p>
      </section>
    </article>
  );
}

const introduce = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  section {
    padding: 20px 0;
    ${fontSize.contentFontSize16};
    line-height: 1.5;

    p span {
      color: transparent;
    }
  }
`;
