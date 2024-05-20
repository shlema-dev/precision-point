import HeaderAbout from "@/components/about/header-about";
import Offerings from "@/components/about/Offerings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Point - About",
};

export default function AboutPage() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-gray-1 bg-[radial-gradient(#222222_1px,#111111_1px)] bg-[size:20px_20px]"></div>
      <HeaderAbout />
      <Offerings />
    </main>
  );
}
