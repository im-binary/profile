import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

const LAST_PAGE = 4;

function useParallax(value, distance) {
  console.log({ value });
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Message({ text, onViewportEnter, onViewportLeave, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Container>
      <div ref={ref} css={{ position: "relative" }}></div>
      <H2
        style={{ y }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        onViewportEnter={onViewportEnter}
        onViewportLeave={onViewportLeave}
      >{`${text}`}</H2>
      {LAST_PAGE === index && (
        <ResumLink>
          <a href='/resume'>떼껄룩 ~</a>
        </ResumLink>
      )}
    </Container>
  );
}

const ResumLink = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  a {
    border-radius: 3px;
    padding: 10px 30px;
    background-color: #bebaba78;
    cursor: pointer;
    font-size: 2.8rem;
    letter-spacing: 0.1em;
    color: #fff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #c8c8c8c8;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Container = styled.section`
  // @see https://noonnu.cc/font_page/805
  font-family: "GangwonEduPowerExtraBoldA";
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;

  @media (max-width: 1180px) {
    h2 {
      left: 0;
      right: 0;
      text-align: center;
      color: white;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
  }
`;

const H2 = styled(motion.h2)`
  position: absolute;
  left: calc(50% + 240px);
  margin: 0;
  font-size: 5.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.2;
`;
