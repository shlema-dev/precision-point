"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTAbutton: React.FC = () => {
  return (
    <Link href={"/contact"}>
      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mt-6 w-64 h-12 rounded text-gray-1 bg-gradient-to-r from-primary-9 to-indigo-600"
      >
        Contact us
      </motion.button>
    </Link>
  );
};

export default CTAbutton;
