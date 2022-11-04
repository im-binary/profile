import React from "react";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  garyTitleBorderBottom,
  fontSize,
  mainColor,
  boxTextColor,
  lightBoxShadow,
  darkBoxShadow,
  whiteTitleBorderBottom,
} from "../../style/main";
import { useFetch } from "../../hooks/fetch";
import { useTheme } from "../../hooks/theme";
import CircleButton from "../Common/CircleButton";
import styled from "@emotion/styled";

export default function ProjectSection() {
  const fetchUrl = "/data/profile/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const [theme] = useTheme();

  const { dataList: projectList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={projectInfoContainer(theme)}>
      <h2>프로젝트</h2>
      <Container>
        {projectList.map((item) => (
          <ProjectCard key={`project-${item.id}`} theme>
            <img
              css={css`
                display: block;
                width: 100%;
                height: 150px;
                object-fit: cover;
                overflow: hidden;
              `}
              src={item.projectImage}
              alt=''
            />

            <ButtonContainer>
              <div className='circle-button-container'>
                <CircleButton
                  onClick={() => {
                    window.open(item.repositoryLink, "_blank");
                  }}
                  light={<img src='/images/icons/github-light-icon.png' alt='' />}
                  dark={<img src='/images/icons/github-dark-icon.png' alt='' />}
                />
                {item.troubleshootLink && (
                  <CircleButton
                    onClick={() => {
                      window.open(item.troubleshootLink, "_blank");
                    }}
                  >
                    <img src='/images/icons/notion-icon.svg' alt='' />
                  </CircleButton>
                )}
              </div>
              <a href={item.projectLink} target='_blank' rel='noreferrer'>
                <CircleButton type='button' className='themore-button'>
                  👉 보러가기
                </CircleButton>
              </a>
            </ButtonContainer>

            <ProjectCardTextContainer>
              <ProjectName>{item.name}</ProjectName>
              <ProjectPeriod>프로젝트 기간 : {item.period}</ProjectPeriod>
              <ProjectSummary>
                <p>{item.summary}</p>
              </ProjectSummary>
              <TeckStackContainer>
                {item.teckStack.name.map((x, index) => (
                  <li key={`techStack-${index}`}>{x}</li>
                ))}
              </TeckStackContainer>
            </ProjectCardTextContainer>
          </ProjectCard>
        ))}
      </Container>
    </article>
  );
}

const projectInfoContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ProjectCard = styled.section`
  position: relative;
  ${fontSize.contentFontSize16}
  border-radius: 3px;
  overflow: hidden;
  box-shadow: ${(props) => (props.theme === "light" ? lightBoxShadow : darkBoxShadow)};
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0 0 10px;

  .themore-button {
    width: auto;
    border-radius: 8px;
    padding: 0 10px;
    font-weight: bold;
  }

  .circle-button-container {
    display: flex;
    gap: 10px;
  }
`;

const ProjectCardTextContainer = styled.div`
  padding: 20px;

  p {
    line-height: 1.5;
  }

  p + p {
    margin-top: 16px;
  }
`;

const ProjectName = styled.p`
  font-weight: bold;
  text-align: center;
`;

const ProjectPeriod = styled.p`
  text-align: end;
  font-size: 1.2rem;
  font-style: italic;
`;

const TeckStackContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 10px 0 20px;

  li {
    padding: 3px 6px;
    background-color: ${mainColor};
    border-radius: 3px;
    color: ${boxTextColor};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const ProjectSummary = styled.div`
  font-size: 1.4rem;
  padding: 10px;
  height: 100px;
  margin-top: 16px;
  overflow: scroll;
  white-space: pre-wrap;
  word-break: keep-all;
`;
