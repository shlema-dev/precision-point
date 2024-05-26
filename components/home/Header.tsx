import CTAbutton from "@/components/ui/CTAbutton";
import { Reveal } from "@/components/ui/Reveal";

export default function Header() {
  return (
    <section className="w-full relative flex items-center justify-center min-h-[100vh] overflow-hidden">
      <div className="absolute z-2 w-auto min-w-full min-h-full max-w-none">
        <div className="absolute z-[4] w-full h-full bg-gray-12 opacity-50"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/networking-frame.png"
        >
          <source src="/videos/networking.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center gap-8 absolute inset-0 px-4">
        <Reveal delay={0.15}>
          <div className="mt-12 lg:mt-0 mx-auto flex flex-col items-center prose text-center p-8 rounded-xl">
            <h1 className="prose-3xl lg:text-6xl lg:font-semibold text-gray-1">
              Your{" "}
              <span className="bg-gradient-to-r from-primary-9 to-indigo-600 inline-block text-transparent bg-clip-text">
                Gateway
              </span>{" "}
              To Exceptional Talent
            </h1>
            <p className="lg:prose-lg text-gray-1 opacity-100 -mt-2">
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
