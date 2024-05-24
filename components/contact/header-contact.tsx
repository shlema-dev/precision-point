import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const HeaderContact: React.FC = () => {
  return (
    <Reveal>
      <section className="mt-24 mb-12 lg:mt-48 lg:mb-24 pt-24 px-6 w-[85vw] flex flex-col items-center justify-start text-center prose">
        <h1 className="prose-3xl lg:text-6xl lg:font-semibold text-gray-12">
          Get In{" "}
          <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
            Touch
          </span>
        </h1>
        <p className="lg:prose-lg text-gray-12 opacity-100 -mt-2">
          Feel free to reach out with any questions or requests. We check our
          email regularly and will respond as soon as we can!
        </p>
      </section>
    </Reveal>
  );
};

export default HeaderContact;
