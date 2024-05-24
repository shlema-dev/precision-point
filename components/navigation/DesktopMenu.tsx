"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopMenu: React.FC = () => {
  const path = usePathname();

  return (
    <div className="hidden lg:block">
      <ul className="flex gap-8">
        <motion.li
          whileHover={{
            boxShadow:
              path === "/"
                ? "0px 2px 0 rgba(0, 162, 199, 1)"
                : "0px 2px 0 rgba(0, 0, 0, 0.7)",
          }}
          className={`${
            path === "/"
              ? "text-primary-9 border-b border-primary-9"
              : "text-gray-12"
          }  px-5 py-1`}
        >
          <Link href={"/"}>Home</Link>
        </motion.li>

        <motion.li
          whileHover={{
            boxShadow:
              path === "/about"
                ? "0px 2px 0 rgba(0, 162, 199, 1)"
                : path === "/"
                ? "0px 2px 0 rgba(255, 255, 255, 1)"
                : "0px 2px 0 rgba(0, 0, 0, 0.7)",
          }}
          className={`${
            path === "/about"
              ? "text-primary-9 border-b border-primary-9"
              : "text-gray-12"
          } ${path === "/" ? "text-primary-1" : "text-gray-12"} px-5 py-1`}
        >
          <Link href={"/about"}>About</Link>
        </motion.li>

        <motion.li
          whileHover={{
            boxShadow:
              path === "/contact"
                ? "0px 2px 0 rgba(0, 162, 199, 1)"
                : path === "/"
                ? "0px 2px 0 rgba(255, 255, 255, 1)"
                : "0px 2px 0 rgba(0, 0, 0, 0.7)",
          }}
          className={`${
            path === "/contact"
              ? "text-primary-9 border-b border-primary-9"
              : "text-gray-12"
          } ${path === "/" ? "text-primary-1" : "text-gray-12"} px-5 py-1`}
        >
          <Link href={"/contact"}>Contact</Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
