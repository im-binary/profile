import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MotionImage from "../components/home/MotionImage";

export default function Home() {
  return (
    <section css={homeContainer}>
      <MotionImage />
    </section>
  );
}

const homeContainer = css``;
