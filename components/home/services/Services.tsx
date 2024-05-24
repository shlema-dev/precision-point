"use client";
import Image from "next/image";

import contingentPhoto from "@/public/contingent.jpg";
import retainedPhoto from "@/public/retained.jpg";
import rpoPhoto from "@/public/rpo.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { Reveal } from "@/components/ui/Reveal";

const Services: React.FC = () => {
  // Refs for each motion.div
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // InView hooks for each motion.div
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  // Animation controls for each motion.div
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) {
      controls4.start("visible");
    }
  }, [isInView4]);

  return (
    <section className="min-h-[90vh] flex flex-col justify-start items-center">
      <Reveal>
        <div className="z-10 lg:mb-2 mt-12 lg:mt-24 px-6 py-4 flex flex-col prose text-center">
          <h2 className="text-4xl font-bold text-gray-12 rounded-lg">
            Our{" "}
            <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
              Custom Services
            </span>{" "}
            Fit Any Need
          </h2>
          <p className="-mt-2 prose-md lg:prose-lg text-gray-12">
            Every opportunity is unique, and our services reflect this. We offer
            customized solutions designed to meet your specific needs. Find the
            perfect match that works for you.
          </p>
        </div>
      </Reveal>

      <div className="w-[85vw] xl:max-w-7xl my-8 flex flex-col xl:flex-row gap-6 lg:gap-8 justify-center items-center">
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls2}
          transition={{
            duration: 0.5,
          }}
        >
          <CardContainer>
            <CardBody className="relative flex-1 h-[550px] lg:h-[650px] rounded-xl p-2 border border-gray-8 hover:border-primary-8">
              <CardItem translateZ="100" className="w-full mb-4">
                <Image
                  src={contingentPhoto}
                  className="h-72 md:h-80 xl:h-96 w-full object-cover rounded-lg"
                  alt="thumbnail"
                  loading="lazy"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="prose prose-xl text-gray-12 font-bold mb-2 px-3"
              >
                Contingent
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="prose prose-sm text-gray-11 px-3"
              >
                For our clients to minimize their risks and costs associated
                with the recruitment process, as they only pay when we
                successfully place a candidate. This type of search is typically
                utilized to fill a specific job quickly, or when a client has a
                limited recruitment budget.
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        <motion.div
          ref={ref3}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls3}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >
          <CardContainer>
            <CardBody className="relative flex-1 h-[550px] lg:h-[650px] rounded-xl p-2 border border-gray-8 hover:border-primary-8">
              <CardItem translateZ="100" className="w-full mb-4">
                <Image
                  src={retainedPhoto}
                  className="h-72 md:h-80 xl:h-96 w-full object-cover rounded-lg"
                  alt="thumbnail"
                  loading="lazy"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="prose prose-xl text-gray-12 font-bold mb-2 px-3"
              >
                Retained
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="prose prose-sm text-gray-11 px-3"
              >
                For our client&apos;s most valuable or time sensitive positions.
                Our clients pay an upfront fee to initiate the search process.
                Typically utilized for high-level executives or senior
                management positions, where the recruitment process can be more
                complex.
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        <motion.div
          ref={ref4}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls4}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <CardContainer>
            <CardBody className="relative flex-1 h-[550px] lg:h-[650px] rounded-xl p-2 border border-gray-8 hover:border-primary-8">
              <CardItem translateZ="100" className="w-full mb-4">
                <Image
                  src={rpoPhoto}
                  className="h-72 md:h-80 xl:h-96 w-full object-cover rounded-lg"
                  alt="thumbnail"
                  loading="lazy"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="prose prose-xl text-gray-12 font-bold mb-2 px-3"
              >
                RPO
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="prose prose-sm text-gray-11 px-3"
              >
                Recruitment Process Outsourcing is where we take take on the
                responsibility of managing the recruitment process on behalf of
                the client, much like a 3rd party contractor. Typically, the RPO
                model is used amongst larger organization clients with higher
                volume recruitment needs.
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
