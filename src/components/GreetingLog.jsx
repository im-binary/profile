import { useEffect } from "react";

let onlyOneTime;

export function GreetingLog() {
  useEffect(() => {
    if (onlyOneTime) {
      return;
    }

    console.log(
      `%c안녕하세요, 전이진입니다! 잘 부탁드립니다 🙇‍♀️\n👉 pongpong0121@kakao.com`,
      "color: black; background-color: white;padding: 4px; border-radius: 4px; font-size:32px"
    );

    onlyOneTime = true;
  }, []);

  return null;
}
