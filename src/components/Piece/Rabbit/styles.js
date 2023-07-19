import { css } from "@emotion/react";

export const rabbitCss = css({
  fontSize: 0,
  minWidth: "400px",
  margin: "0 auto",
  textAlign: "center",
});

export const rabbitEarCss = css({
  display: "inline-block",
  border: "3px solid pink",
  width: "100px",
  height: "200px",
  margin: "0px 50px",
  backgroundColor: "pink",

  "& > div": {
    display: "inline-block",
    border: "3px solid rgb(250, 86, 119)",
    width: "50px",
    height: "170px",
    margin: "27px 20px 0 20px",
    backgroundColor: "rgb(250, 86, 119)",
  },
});

export const rabbitFaceCss = css({
  border: "3px solid pink",
  width: "300px",
  height: "150px",
  margin: "-1px auto 0 auto",
  backgroundColor: "pink",

  "& div": {
    display: "inline-block",
    width: "50px",
    height: "50px",
    margin: "20px 30px",
    backgroundColor: "black",
  },
});
