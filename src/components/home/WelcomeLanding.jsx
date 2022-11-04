import styled from "@emotion/styled";
import React, { useState } from "react";
import { Message } from "./Message";

const scrollText = [
  { id: 1, text: "안녕하세요", scale: 1 },
  { id: 2, text: "고양이", scale: 1.5 },
  { id: 3, text: "좋아", scale: 2 },
  { id: 4, text: "왕", scale: 2.5 },
  { id: 5, text: "좋아", scale: 3.3 },
];

export function WelcomeLanding() {
  const [step, setStep] = useState(1);
  const target = scrollText.find((x) => x.id === step);

  return (
    <div>
      <Image step>
        <img
          style={{
            transform: `scale(${target.scale})`,
            transition: "all .2s ease-in-out",
          }}
          src='/images/home/yawn-cat-1.jpeg'
          alt='하품하는 냥'
        />
      </Image>
      {scrollText.map((item) => (
        <Message
          key={`${item.id}`}
          id={item.id}
          text={item.text}
          transform={item.transform}
          onViewportEnter={() => {
            setStep(item.id);
          }}
        />
      ))}
    </div>
  );
}
const Image = styled.div`
  position: fixed;
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1000px;
  background: black;

  img {
    width: 100%;
  }
`;
