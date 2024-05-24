import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const HeaderAbout: React.FC = () => {
  return (
    <Reveal>
      <section className="my-24 lg:my-48 pt-24 px-6 w-[85vw] flex flex-col items-center justify-start text-center prose">
        <h1 className="prose-3xl lg:text-6xl lg:font-semibold text-gray-12">
          Get To{" "}
          <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
            Know Us
          </span>
        </h1>
        <p className="lg:prose-lg text-gray-12 opacity-100 -mt-2">
          Recruitment should be easy, efficient, and precise. At Precision
          Point, we take that to heart, and strive to build strong partnerships
          with our clients. Having worked in external recruitment ourselves, we
          understand the value we can bring to clients when scaling out
          departments.
        </p>
      </section>
    </Reveal>
  );
};

export default HeaderAbout;
