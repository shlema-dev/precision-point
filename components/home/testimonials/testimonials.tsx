import Image from "next/image";
import React from "react";
import biomarinLogo from "@/public/biomarin-logo.png";
import flatironLogo from "@/public/flatiron-logo.png";
import fourDMTLogo from "@/public/4dmt-logo.png";
import stealthLogo from "@/public/Stealth-logo.png";
import { Reveal } from "@/components/ui/Reveal";

const Testimonials: React.FC = () => {
  return (
    <section className="min-h-[95vh] lg:pb-48 h-auto flex flex-col justify-start items-center pb-12">
      <Reveal delay={0.25}>
        <div className="z-10 lg:mb-2 mt-16 px-6 py-4 flex flex-col prose text-center">
          <h2 className="text-4xl font-bold text-gray-12 rounded-lg">
            Real Stories, Real{" "}
            <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
              Success
            </span>
          </h2>
          <p className="-mt-2 prose-md lg:prose-lg text-gray-11">
            Browse the stories of professional growth and organizational
            enhancement from our network. See how we turn career aspirations and
            business needs into reality.
          </p>
        </div>
      </Reveal>

      <div className="z-10 w-[85vw] lg:max-w-7xl my-8 flex flex-col justify-center items-center gap-6 lg:gap-8 ">
        {/* First Tetstimonial */}
        <Reveal delay={0.25}>
          <div className="py-6 lg:py-12 px-4 lg:px-12 flex-1 h-auto rounded-xl  bg-primary-2 border-2 border-primary-8">
            <div className="w-[25%]">
              <Image src={stealthLogo} alt="Company logo" quality={100} />
            </div>
            <p className="prose-sm lg:prose-lg text-primary-12 pt-6">
              “Our partnership with Precision Point has been amazing. Matthew
              and Austin have been such a huge help, truly feeling like an
              extension of our recruiting efforts. They&apos;ve been great
              partners throughout the entire recruitment process - sourcing
              incredible candidates, coordinating interviews, and helping with
              offer negotiations. They have made the whole process so much
              easier for me as a one-person HR team. <br />
              <br />
              Since partnering with them, their expertise in roles like Head of
              Clinical Development, Regulatory Affairs, and various Scientific
              roles has been critical to us building a strong team. I especially
              appreciate how responsive, open, and transparent they are
              throughout the process, always ensuring we&apos;re aligned and
              communicating clearly at every step. <br />
              <br />I highly recommend Precision Point to any organization
              seeking thoughtful, strategic, and collaborative hiring support.”
            </p>
            <p className="prose-sm lg:prose-lg text-primary-11 font-medium pt-4 lg:pt-8">
              Senior Manager of Human Resources at Small Autoimmune Focused
              Biotech
            </p>
          </div>
        </Reveal>
        {/* Second Tetstimonial */}
        <Reveal delay={0.25}>
          <div className="py-6 lg:py-12 px-4 lg:px-12 flex-1 h-auto rounded-xl  bg-primary-2 border-2 border-primary-8">
            <div className="w-[50%]">
              <Image src={biomarinLogo} alt="Company logo" quality={100} />
            </div>
            <p className="prose-sm lg:prose-lg text-primary-12 pt-6">
              “I recently had the pleasure of working with Precision Point after
              they contacted me about an exciting job opportunity. Throughout
              the process, Precision Point was professional, deeply
              knowledgeable, quick to respond and very thoughtful and receptive
              to my wants and needs for my next career step. Even after I
              ultimately declined the offer they helped secure to instead go
              with another opportunity, they were gracious and positive about my
              decision. If you are searching for a new role in the life
              sciences, you won&apos;t find a better partner than Precision
              Point - they are hands down the best recruitment firm I&apos;ve
              worked with.”
            </p>
            <p className="prose-sm lg:prose-lg text-primary-11 font-medium pt-4 lg:pt-8">
              Director at BioMarin
            </p>
          </div>
        </Reveal>

        {/* Third Tetstimonial */}
        <Reveal delay={0.25}>
          <div className="py-6 lg:py-12 px-4 lg:px-12 flex-1 h-auto rounded-xl bg-primary-2 border-2 border-primary-8">
            <div className="w-[50%]">
              <Image src={flatironLogo} alt="Company logo" quality={100} />
            </div>
            <p className="prose-sm lg:prose-lg text-primary-12 pt-6">
              “I worked with Precision Point while going through the recruitment
              process. They were were kind, courteous, attentive to my unique
              situation and ultimately, was able to place me in a position which
              checked all of my boxes. I most appreciated that Precision Point
              was always ahead of the game, anticipating my needs, and was
              constantly available to answer additional questions. Above all, I
              believe Precision Point genuinely cares about their placements and
              making sure it is a good fit.”
            </p>
            <p className="prose-sm lg:prose-lg text-primary-11 font-medium pt-4 lg:pt-8">
              Director at FlatIron Health
            </p>
          </div>
        </Reveal>

        {/* Fourth Tetstimonial */}
        <Reveal delay={0.25}>
          <div className="py-6 lg:py-12 px-4 lg:px-12 flex-1 h-auto rounded-xl bg-primary-2 border-2 border-primary-8">
            <div className="w-[50%] -ml-2 lg:-ml-6">
              <Image src={fourDMTLogo} alt="Company logo" quality={100} />
            </div>
            <p className="prose-sm lg:prose-lg text-primary-12 pt-6">
              “As an in-house HR professional, agencies reach out to me
              literally every day. I’ve had some bad experiences with agencies
              that did not have my company’s best interests at heart. Precision
              Point Staffing was referred to me by an executive I respect. So, I
              took the leap of faith to engage the services of their firm.
              Precision Point brings energy and enthusiasm to the conversation.
              I never worried about them representing our company well. They
              seeks to understand the roles in depth and does their own research
              to fully understand the nature of our business, our expectations,
              budget, and the value proposition. Their follow up is excellent
              and you can count on Precision Point to provide feedback when they
              feels there are obstacles in the market, or our expectations may
              need to be adjusted. They will not just hand you volumes of
              candidates. They provide well thought out referrals with summary
              of skills. Candidates have shared positive feedback about their
              experience with Precision Point. They always knew where they stood
              and were communicated with in a timely manner. I would certainly
              engage Precision Point again when the need arises.”
            </p>
            <p className="prose-sm lg:prose-lg text-primary-11 font-medium pt-4 lg:pt-8">
              Elza Reynolds, Associate Director, Talent Acquisition
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
