import { CaretDownIcon } from "@radix-ui/react-icons";
import CTAbutton from "@/components/ui/CTAbutton";
import { Reveal } from "@/components/ui/Reveal";

export default function Header() {
  return (
    <section className="w-full relative flex items-center justify-center min-h-[100vh] overflow-hidden">
      <video
        className="absolute z-1 w-auto min-w-full min-h-full max-w-none opacity-50"
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/networking.mp4" type="video/mp4" />
      </video>
      <div className="z-10 flex flex-col items-center justify-center text-center gap-8 absolute inset-0 px-4">
        <Reveal delay={0.15}>
          <div className="mt-12 lg:mt-0 mx-auto flex flex-col items-center prose text-center p-8 rounded-xl">
            <h1 className="prose-3xl lg:text-6xl lg:font-semibold dark:text-gray-12 text-gray-1 ">
              Your{" "}
              <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
                Gateway
              </span>{" "}
              To Exceptional Talent
            </h1>
            <p className="lg:prose-lg text-gray-12 opacity-100 -mt-2">
              Precision Point specializes in strategic talent acquisition,
              connecting you with top talent anywhere from entry-level to
              executives. Leveraging deep industry insights and a vast network,
              we deliver the expertise your company needs.
            </p>
            <CTAbutton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
