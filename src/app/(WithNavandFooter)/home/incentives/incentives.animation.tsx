"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const IncentivesAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <motion.div
        style={{
          scale: isInView ? 1 : 0,
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0, 0.71, 0.2, 1.01)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
