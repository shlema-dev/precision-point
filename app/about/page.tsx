import HeaderAbout from "@/components/about/header-about";
import Offerings from "@/components/about/Offerings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Point - About",
};

export default function AboutPage() {
  return (
    <main className="relative w-full lg:h-[100vh] flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <HeaderAbout />
      <Offerings />
    </main>
  );
}
