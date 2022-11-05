import styled from "@emotion/styled";
import React, { useState } from "react";
import { Message } from "./Message";

const scrollText = [
  { id: 1, text: "안녕하세요", scale: 1 },
  { id: 2, text: "혹시", scale: 1.5 },
  { id: 3, text: "고양이", scale: 2 },
  { id: 4, text: "좋아하시나요?", scale: 2.5 },
  { id: 5, text: "저두용 🐈🐈‍⬛", scale: 3.3 },
];

export function WelcomeLanding() {
  const [step, setStep] = useState(1);
  const target = scrollText.find((x) => x.id === step);

  return (
    <div>
      <Image>
        <img
          style={{
            transform: `scale(${target.scale})`,
            transition: "all .2s ease-in-out",
          }}
          src='/images/home/yawn-cat-1.jpeg'
          alt='하품하는 냥'
        />
      </Image>
      {scrollText.map((item, index) => (
        <>
          <Message
            index={index}
            key={`${item.id}`}
            id={item.id}
            text={item.text}
            transform={item.transform}
            onViewportEnter={() => {
              setStep(item.id);
            }}
          />
        </>
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
