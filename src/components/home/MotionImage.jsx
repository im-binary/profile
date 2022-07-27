import React from "react";
import Image from "./Image";
import { motion, useScroll, useSpring } from "framer-motion";

export default function MotionImage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollText = [
    { id: 1, text: "안녕하세요", transform: "scale(1)" },
    { id: 2, text: "고양이", transform: "scale(1.5)" },
    { id: 3, text: "좋아", transform: "scale(2)" },
  ];
  return (
    <>
      {scrollText.map((item) => (
        <Image key={`${item.id}`} id={item.id} text={item.text} transform={item.transform} />
      ))}
      <motion.div className='progress' style={{ scaleX }} />
    </>
  );
}
