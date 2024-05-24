import React from "react";
import Image from "next/image";
import connectionImage from "@/public/connections.png";
import experienceImage from "@/public/experience.png";
import resourcesImage from "@/public/resources.png";
import { Reveal } from "@/components/ui/Reveal";

const Offerings: React.FC = () => {
  return (
    <Reveal delay={0.25}>
      <section className="w-[85vw] pt-12 pb-24 px-6 border-t border-primary-9 flex justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-24 justify-center items-center">
          <Reveal delay={0.35}>
            <div className="flex flex-col justify-center items-center text-center h-72 w-auto prose">
              <div className="w-16 h-16">
                <Image
                  src={connectionImage}
                  alt="connections icon"
                  quality={100}
                />
              </div>
              <h3 className="prose-2xl text-gray-12">Connections</h3>
              <p className="prose-sm lg:-mt-2 lg:text-md text-gray-12">
                We don&apos;t believe in charging high fees and making one-off
                placements. We aim to form genuine partnerships that extend
                beyong a single placement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col justify-center items-center text-center h-72 w-auto prose">
              <div className="w-16 h-16">
                <Image
                  src={experienceImage}
                  alt="connections icon"
                  quality={100}
                />
              </div>
              <h3 className="prose-2xl text-gray-12">Experience</h3>
              <p className="prose-sm lg:-mt-2 lg:text-md text-gray-12">
                Our team of experienced recruiters have a deep understanding of
                the industry, including trends, technology, and regulatory
                environment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-col justify-center items-center text-center h-72 w-auto prose">
              <div className="w-16 h-16">
                <Image
                  src={resourcesImage}
                  alt="connections icon"
                  quality={100}
                />
              </div>
              <h3 className="prose-2xl text-gray-12">Resources</h3>
              <p className="prose-sm lg:-mt-2 lg:text-md text-gray-12">
                We leverage our extensive network and attract the best talent
                for your needs, we have the expertise and resources to deliver
                top-notch candidates for your organization.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Reveal>
  );
};

export default Offerings;
