import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MotionImage from "../components/home/MotionImage";
import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);

  console.log("state", state);
  return (
    <section css={homeContainer({ state })}>
      <MotionImage />
    </section>
  );
}

const homeContainer = ({ state }) => css`
  color: ${state ? "#000" : "#fff"};
`;
