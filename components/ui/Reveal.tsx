"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay?: number;
}

export const Reveal = ({ children, delay = 0 }: Props) => {
  return (
    <div className={`relative overflow-hidden`}>
      <MotionConfig reducedMotion="user">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay,
          }}
        >
          {children}
        </motion.div>
      </MotionConfig>
    </div>
  );
};
