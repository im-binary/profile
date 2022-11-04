import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

function useParallax(value, distance) {
  console.log({ value });
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Message({ text, onViewportEnter, onViewportLeave }) {
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
    </Container>
  );
}

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

  @media (max-width: 953px) {
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
