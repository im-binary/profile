/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTheme } from "../../hooks/theme";
import { garyTitleBorderBottom, fontSize, whiteTitleBorderBottom, mainColor } from "../../style/main";
import { useFetch } from "../../hooks/fetch";

export default function Work() {
  const fetchUrl = "/data/resume/workData.json";
  const fetchStorage = "workData";
  const [theme] = useTheme();

  const { dataList: workList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article name='Work' css={work(theme)}>
      <h2>👽 업무 경험</h2>
      <section>
        <ul>
          {workList.map((work) => (
            <WorkItem key={work.id} theme>
              <div className='work-left'>
                <p>{work.period} ~</p>
                {/* <p>({calc재직개월수(work.period)})</p> */}
                <p className='work-item-company'>{work.companyName}</p>
                <p>{work.task}</p>
              </div>
              <div>
                {work.contributions.map((contribution, index) => (
                  <ContributionContainer key={index}>
                    <p>{contribution.title}</p>
                    {contribution.contents.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ContributionContainer>
                ))}
              </div>
            </WorkItem>
          ))}
        </ul>
      </section>
    </article>
  );
}

const work = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  section {
    padding: 20px 0;
    ${fontSize.contentFontSize16};
    line-height: 1.5;
  }
`;

const WorkItem = styled.li`
  display: grid;
  grid-template-columns: 150px 4fr;
  gap: 20px;
  padding: 20px;
  ${fontSize.contentFontSize16}
  border-radius: 5px;
  overflow: hidden;
  border: 3px solid ${mainColor};

  @media (max-width: 540px) {
    display: block;
  }

  .work-left {
    border-right: 2px solid ${mainColor};

    p:nth-of-type(1) {
      font-weight: bold;
    }

    p:nth-of-type(2) {
      font-weight: bold;
    }

    p:nth-of-type(3) {
      color: grey;
    }

    p + p {
      margin-top: 4px;
    }

    @media (max-width: 540px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 8px;
      border-right: none;
      margin-bottom: 4px;
      padding-bottom: 4px;
      border-bottom: 2px solid ${mainColor};

      p + p {
        margin-top: 0px;
      }

      p:nth-of-type(1) {
        margin-bottom: 4px;
      }

      p:nth-of-type(2) {
        grid-column: 1/2;
      }
    }
  }
`;

const ContributionContainer = styled.ul`
  & + & {
    margin-top: 10px;
  }

  p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  li {
    margin-left: 35px;
    list-style: disc;
    line-height: 1.8;
  }
`;
