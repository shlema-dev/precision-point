"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MobileMenu: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Menu as="div" className="flex flex-1 justify-end lg:hidden">
      {({ open }) => (
        <>
          <MenuButton
            className={`flex items-center rounded-full border ${
              path === "/" ? "border-gray-1" : "border-gray-12"
            } p-3`}
            aria-label="nav button"
          >
            {open ? (
              <motion.div
                key="crossIcon"
                initial={isMounted ? { scale: 0 } : {}}
                animate={{ rotate: 180, scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Cross1Icon
                  width={20}
                  height={20}
                  style={{ color: path === "/" ? "white" : "black" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menuIcon"
                initial={isMounted ? { scale: 0 } : {}}
                animate={{ rotate: 180, scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <HamburgerMenuIcon
                  width={20}
                  height={20}
                  style={{ color: path === "/" ? "white" : "black" }}
                />
              </motion.div>
            )}
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                key="menu"
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                anchor="bottom end"
                className={`z-10 mt-2 py-6 w-[300px] flex flex-col justify-center origin-top ${
                  path === "/" ? "bg-gray-1" : "bg-gray-12"
                } rounded-lg`}
              >
                <div className="flex flex-col gap-4 text-center items-center">
                  <MenuItem>
                    <Link
                      href={"/"}
                      className={`prose prose-xl ${
                        path === "/" ? "text-primary-9" : "text-gray-1"
                      } block data-[active]:bg-gray-5 data-[focus]:bg-gray-9 data-[focus]:rounded px-4`}
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href={"/about"}
                      className={`prose prose-xl ${
                        path === "/about"
                          ? "text-primary-9"
                          : path === "/"
                          ? "text-gray-12"
                          : "text-gray-1"
                      } block data-[active]:bg-gray-5 data-[focus]:bg-gray-9 data-[focus]:rounded px-4`}
                    >
                      About
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href={"/contact"}
                      className={`prose prose-xl ${
                        path === "/contact"
                          ? "text-primary-9"
                          : path === "/"
                          ? "text-gray-12"
                          : "text-gray-1"
                      } block data-[active]:bg-gray-5 data-[focus]:bg-gray-9 data-[focus]:rounded px-4`}
                    >
                      Contact
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};

export default MobileMenu;
