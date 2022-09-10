import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/theme";
import { contentFontSize16, contentFontSize30, garyTitleBorderBottom, whiteTitleBorderBottom } from "../../style/main";

export default function Introduce() {
  const [theme] = useTheme();

  return (
    <article css={introduce(theme)}>
      <h2>Hello</h2>
      <section>
        <p>
          <span>👻</span>
          저는 종종 자기 자신에게 지나칠 정도로 엄격하다는 말을 듣곤 했습니다. 과거의 저는 그런 말을 듣고나면 무조건
          고쳐야겠다는 강박에 시달리곤 했는데, 지금의 저는 그 말을 조금은 달리 받아들이고 있습니다. 곰곰이 생각해보니
          제가 사랑하는 일을 하는 순간에만 나에게 '엄격한 나'를 만날 수 있었습니다. 그래서 이제는 그러한 평가를
          받는다면, 오히려 기분이 좋습니다. 아, 지금 내가 정말 사랑하는 일을 하고 있구나!
        </p>
        <p
          css={css`
            margin-top: 6px;
          `}
        >
          <span>👻</span>
          현재, 제가 사랑하는 일을 정말 잘하고 싶어 프론트엔드 교육과정을 찾아 수강하고, 부족한 면을 마주한다면
          공부하고, 블로그에 정리하며 더 나은 방향으로 가기 위해 노력중입니다. 앞으로 '엄격한 나'에게 내가 마음에 들
          때까지 열심히 공부하고 성장해보려고 합니다!
        </p>
      </section>
    </article>
  );
}

const introduce = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${contentFontSize30}
  }

  section {
    margin: 20px;
    ${contentFontSize16};
    line-height: 1.5;

    p span {
      color: transparent;
    }
  }
`;
