"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import "./scroll-animation.scss";

export const ScrollBarAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="progress-bar z-10" style={{ scaleX }} />;
};
