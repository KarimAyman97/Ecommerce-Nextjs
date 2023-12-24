"use client";
import { motion } from "framer-motion";

export const SubscribeButtonAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      animate={{
        scale: [1, 0.8, 1],
        transition: { duration: 2, repeat: Infinity },
      }}
    >
      {children}
    </motion.div>
  );
};
