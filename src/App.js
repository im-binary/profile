/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Info from "./components/Info";
import Nav from "./components/Nav";

export default function App() {
  return (
    <section css={appContainer}>
      <Info />
      <Nav />
    </section>
  );
}

const appContainer = css`
  width: 300px;
  margin-right: 10px;
`;
