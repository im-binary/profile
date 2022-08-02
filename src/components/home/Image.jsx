import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Image({ id, text, transform }) {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section css={motionImgContainer}>
      <div ref={ref}>
        <img src={`/images/home/yawn-cat-${id}.jpeg`} alt='yawn-cat' style={{ transform: `${transform}` }} />
      </div>
      <motion.h2 style={{ y }}>{`${text}`}</motion.h2>
    </section>
  );
}

const motionImgContainer = css`
  font-family: "GangwonEduPowerExtraBoldA";
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;

  div {
    position: relative;
    width: 300px;
    height: 400px;
    max-height: 90vh;
    overflow: hidden;
  }

  h2 {
    position: absolute;
    left: calc(50% + 180px);
    margin: 0;
    font-size: 5.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1.2;
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  img .progress {
    position: fixed;
    left: 0;
    right: 0;
    height: 5px;
    bottom: 100px;
  }

  @media (max-width: 953px) {
    h2 {
      left: 0;
      right: 0;
      text-align: center;
    }
  }
`;
