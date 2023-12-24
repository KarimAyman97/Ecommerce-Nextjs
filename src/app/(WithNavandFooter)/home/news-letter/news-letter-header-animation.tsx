"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const NewsLetterHeaderAnimation = ({
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
          transform: isInView ? "none" : "translateY(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
