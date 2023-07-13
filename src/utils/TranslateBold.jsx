import React from "react";

export function TranslateBold({ children, className, as = "p" }) {
  const pattern = /(\*\*.*?\*\*)/;

  const text = children;
  const parts = text.split(pattern).filter((x) => x.length > 0);

  const elements = parts.map((part, index) => {
    if (part.match(pattern)) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return React.createElement(as, { className }, elements);
}
