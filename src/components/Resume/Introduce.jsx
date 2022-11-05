/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/theme";
import { fontSize, garyTitleBorderBottom, whiteTitleBorderBottom } from "../../style/main";

export default function Introduce() {
  const [theme] = useTheme();

  return (
    <article css={introduce(theme)}>
      <h2>Hello</h2>
      <section>
        <p
          css={css`
            text-indent: 16px;
          `}
        >
          안녕하세요! 어제보다 더 나은 신입 개발자, 전이진입니다. 코드스테이츠 부트캠프를 통해 개발을 배우고
          수료하였습니다. 필요한 서비스가 생기면 만들어보며 시간을 보내고 있습니다. 요즘에는 간단하고 단순한 서비스라도
          가독성 좋은 코드로 작성해보는 것에 재미를 느끼고 있습니다.
        </p>
        <p
          css={css`
            margin-top: 6px;
            text-indent: 16px;
          `}
        >
          개발 공부를 하기 전까지 작가가 되기 위해 글쓰는 일을 했습니다. 오랫동안 글을 써오면서 동료가 악의적인 표절
          신고를 당해 수상이 취소된 것을 보기도 하고, 글을 표절당해보기도 했습니다. 모두 사람으로부터 글을 지키기 위해
          가진 것이나 사유를 나누는 것에 박해질 수밖에 없었습니다. 이러한 생태계가 익숙해질 때쯤 개발자들은 코드를 서로
          공유하고, 리뷰하며 자신의 생각을 감추지 않고 말하며 서로의 성장을 진심으로 돕는다는 것을 알게 되면서 그 문화에
          매력을 느꼈습니다. 그 문화에 섞여 더 이상 가진 것들을 꼭꼭 숨기지 않고 나누고 싶어 개발을 시작하게 되었습니다.
        </p>
        <p
          css={css`
            margin-top: 6px;
            text-indent: 16px;
          `}
        >
          단순히 개발 언어를 공부하던 중 스크롤을 올리거나 내릴 때 굉장히 많은 사진이 이어져 동영상이 재생되는 것처럼
          보이는 웹을 접한 적이 있습니다. 이러한 사이트를 어떻게 만드는지 찾아보다가 사용자 눈에 보이는 전반적인 것들을
          프론트엔드 개발자가 만든다는 것을 알게 되었습니다. 이 외에도 사용하기 어려웠던 웹 들을 경험하면서 사용자가
          이용하기 편한 웹을 만드는 일에 기여하고 싶어 프론트엔드 쪽을 선택하게 되었습니다.
        </p>
        {/* <p
          css={css`
            margin-top: 6px;
            text-indent: 16px;
          `}
        >
          단기적인 목표는 누군가에게 멘토링을 해줄 수 있을만큼 실력을 끌어올리고 성장하고 싶습니다. 장기적인 목표는
          회사나 개인적으로 수준높은 라이브러리를 만들어 프론트엔드 개발자들의 생산성을 높이는 일에 기여하고 싶습니다.
        </p> */}
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
    margin: 20px;
    ${fontSize.contentFontSize16};
    line-height: 1.5;

    p span {
      color: transparent;
    }
  }
`;
