import ProfileSection from "@/components/about/ProfileSection";
import HeaderAbout from "@/components/about/header-about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Point - About",
};

export default function AboutPage() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div
        className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-primary-10"
        style={{ clipPath: "polygon(0 50%, 100% 25%, 100% 100%, 0% 100%)" }}
      ></div>
      <HeaderAbout />
      <ProfileSection />
    </main>
  );
}
