/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Rabbits from "./Rabbit/Rabbits";
import { useModal } from "../../hooks/useModal";
import { fontSize } from "../../style/main";
import { useTheme } from "../../hooks/theme";
import Card from "../common/Card/Card.jsx";
import styled from "@emotion/styled";

export function PieceList() {
  const { open: openModal } = useModal();
  const [theme] = useTheme();

  return (
    <section css={piece(theme)}>
      <CardWrapper>
        <Card
          onClick={() =>
            openModal({
              title: "🐰 CSS로 만든 토끼",
              content: <Rabbits />,
            })
          }
        >
          <Card.Title css={cardCss}>🐰 CSS로 만든 토끼</Card.Title>
          <Card.Content>
            <img src='/images/piece/example-rabbit.png' alt='rabbit' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Title>🚧</Card.Title>
          <Card.Content>준비중 ...</Card.Content>
        </Card>
      </CardWrapper>
    </section>
  );
}

const piece = (theme) => css`
  padding: 20px 0;
  ${fontSize.contentFontSize16};
  line-height: 1.5;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const cardCss = css`
  font-weight: 700;
`;
