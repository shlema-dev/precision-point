"use client";

import { ChevronUpIcon } from "@radix-ui/react-icons";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <button
      className="lg:hidden mt-12 p-2 rounded-full border-2 border-gray-11"
      aria-label="Scroll-to-top"
      onClick={scrollToTop}
    >
      <ChevronUpIcon />
    </button>
  );
};

export default ScrollToTopButton;
