import { useRef, createRef } from "react";

export function useMoveScroll(array) {
  const elementRef = useRef(array.map(() => createRef()));

  const onMoveToElement = (index) => {
    const element = elementRef?.current[index];

    element.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { elementRef, onMoveToElement };
}
