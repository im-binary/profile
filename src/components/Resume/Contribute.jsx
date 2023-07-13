/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";
import {
  boxTextColor,
  darkBoxShadow,
  fontSize,
  garyTitleBorderBottom,
  lightBoxShadow,
  whiteTitleBorderBottom,
} from "../../style/main";
import { CircleButton } from "../common/CircleButton";
import { TranslateBold } from "../../utils/TranslateBold";

export default function Contribute() {
  const [theme] = useTheme();
  const fetchUrl = "/data/resume/contributeData.json";
  const fetchStorage = "contributeData";

  const { dataList: contributeList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article name='Contribute' css={contributeContainer(theme)}>
      <h2>🚀 오픈 소스 기여</h2>
      <ul>
        {contributeList.map((item) => (
          <li key={item.id}>
            <LinkContainer theme={theme} className='no-print'>
              <a href={item.contributeLink} target='_blank' rel='noreferrer'>
                <CircleButton type='button' className='themore-button'>
                  👉 PR 확인
                </CircleButton>
              </a>
              <a href={item.contributeReflection} target='_blank' rel='noreferrer'>
                <CircleButton type='button' className='themore-button'>
                  🌐 반영 내용
                </CircleButton>
              </a>
            </LinkContainer>
            <Image src={item.contributeImage} className='no-print' />
            <Name>{item.contributeName}</Name>
            <p className='print'>
              👉 PR: <a href={item.contributeLink}>{item.contributeLink}</a>
            </p>
            <p className='print'>
              👉 결과: <a href={item.contributeReflection}>{item.contributeReflection}</a>
            </p>
            <Description>
              <TranslateBold as='span'>{item.contributeDescription}</TranslateBold>
            </Description>
          </li>
        ))}
      </ul>
    </article>
  );
}

const contributeContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px 0;

    @media (max-width: 400px) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  li {
    padding: 20px;
    white-space: pre-wrap;
    box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
    border-radius: 3px;

    p {
      line-height: 1.5;
      text-indent: 8px;
    }

    .themore-button {
      width: auto;
      border-radius: 8px;
      padding: 0 10px;
      font-weight: bold;
    }
  }
`;

const Image = styled.div`
  height: 100px;
  background-color: #eeeeee;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position-y: center;
`;

const Name = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  font-size: 1.8rem;
  color: ${boxTextColor};
`;

const Description = styled.p`
  font-size: 1.4rem;
  word-break: keep-all;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: ${(props) => (props.theme === "light" ? "#005aad" : "skyblue")};

  @media (max-width: 400px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
