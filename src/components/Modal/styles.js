/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { lightFontColor, mainColor } from "../../style/main";

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(0.96)",
  },
  to: {
    opacity: "1",
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const dialogOverlayCss = css({
  backgroundColor: "rgba(0, 0, 0, 0.44)",
  position: "fixed",
  inset: "0",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  // TODO: z-index 프로젝트 내에서 전부 다 제거하기
  zIndex: "999",
});

export const dialogContentCss = css({
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "85vh",
  padding: "25px",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: "999",
  overflow: "scroll",

  "&:focus": {
    outline: "none",
  },
});

export const dialogTitleCss = css({
  margin: "0 0 20px 0",
  fontWeight: 700,
  color: `${lightFontColor}`,
  fontSize: "2rem",
});

export const dialogDescriptionCss = css({
  margin: "10px 0 20px",
  color: `${lightFontColor}`,
  fontSize: "1.6rem",
  lineHeight: "1.5",
});

export const dialogCloseButtonCss = css({
  fontFamily: "inherit",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "22px",
  right: "25px",
  cursor: "pointer",
  fontSize: "20px",
  padding: "0px 8px",
  transition: "border 0.3s ease 0s",
  border: "2px solid transparent",
  color: "#d2b4ff",

  "&:hover": {
    border: "2px solid #d2b4ff",
    borderRadius: "100%",
    transition: "border 0.3s ease 0s",
  },
});

export const dialogOpenButtonCss = css({
  backgroundColor: `${mainColor}`,
  color: `${lightFontColor}`,
  padding: "10px 20px",
  borderRadius: "6px",
  fontSize: "1.5rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.2s ease 0s",
});
