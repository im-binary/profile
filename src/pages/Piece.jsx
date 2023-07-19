/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../hooks/theme";
import { mainSectionContainer, fontSize, garyTitleBorderBottom, whiteTitleBorderBottom } from "../style/main";
import { PieceList } from "../components/Piece/PieceList";
import { OverlayProvider } from "@toss/use-overlay";

export function Piece() {
  const [theme] = useTheme();

  return (
    <section css={PieceContainer({ theme })}>
      <h1>💫 Piece</h1>
      <OverlayProvider>
        <PieceList />
      </OverlayProvider>
    </section>
  );
}

const PieceContainer = ({ theme }) => css`
  ${mainSectionContainer};
  h1 {
    ${fontSize.contentFontSize40}
    ${theme === "light" ? garyTitleBorderBottom : whiteTitleBorderBottom}
  }
`;
