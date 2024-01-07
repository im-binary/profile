/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTheme } from "../../hooks/theme";
import { garyTitleBorderBottom, fontSize, whiteTitleBorderBottom, mainColor, subColor } from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { Fragment } from "react";

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
              <div className='work-item-title'>
                <p>{work.period} ~</p>
                <p>
                  <span>{work.companyName}</span>
                  <span>{work.task}</span>
                </p>
              </div>
              <div>
                {work.contributions.map((contribution, index) => (
                  <ContributionContainer className="print-work-container" key={index}>
                    <ContributionDateBox>
                      <p className="print-bold-text">{contribution.contributionDate}</p>
                    </ContributionDateBox>

                    <ContributionDescriptionBox>
                      <p className="print-bold-text">✨ {contribution.title}</p>
                      <p>{contribution.contributionDescription}</p>
                    </ContributionDescriptionBox>

                    <ContributionContentBox>
                      {contribution.contents.map((content, index) => (
                        <Fragment key={index}>
                          <li>{content.contentTitle}</li>
                          {content.contentDescription && (
                            <ul>
                              {content.contentDescription.map((description, index) => (
                                <li key={index}>{description}</li>
                              ))}
                            </ul>
                          )}
                        </Fragment>
                      ))}
                    </ContributionContentBox>
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
  word-break: keep-all;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }

  section {
    padding: 20px 0;
    ${fontSize.contentFontSize30};
    line-height: 1.5;
  }
`;

const WorkItem = styled.li`
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  border: 3px solid ${mainColor};

  .work-item-title {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 3px solid ${mainColor};
    ${fontSize.contentFontSize20}

    p:nth-of-type(1) {
      font-weight: bold;
      position: relative;
    }

    p:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      & > span:nth-of-type(1) {
        position: relative;
        font-weight: bold;
      }

      & > span:nth-of-type(2) {
        position: relative;
        color: grey;
        font-weight: normal;
      }
    }
  }
`;

const ContributionContainer = styled.div`
  ${fontSize.contentFontSize16}
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  & + & {
    margin-top: 20px;
  }

  li {
    margin-left: 30px;
    list-style: disc;
    line-height: 1.8;
  }

  li + ul {
    margin-left: 14px;

    & > li {
      list-style: circle;
    }
  }
`;

const ContributionDateBox = styled.div`
  background-color: ${subColor};
  padding: 10px;
  border-radius: 5px;
  grid-row: 1/3;

  & > p:nth-of-type(1) {
    font-weight: bold;
  }

  @media (max-width: 640px) {
    grid-row: 2/3;
    margin-left: 20px;
  }
`;

const ContributionContentBox = styled.ul`
  background-color: ${mainColor};
  padding: 10px;
  border-radius: 5px;
  grid-column: 2/3;

  @media (max-width: 640px) {
    grid-column: unset;
    margin-left: 20px;
  }
`;

const ContributionDescriptionBox = styled.div`
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background-color: ${mainColor};

  & > p:nth-of-type(2) {
    font-weight: normal;
  }
`;
