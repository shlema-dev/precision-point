import { ContactForm } from "@/components/contact/ContactForm";
import HeaderContact from "@/components/contact/header-contact";
import { Reveal } from "@/components/ui/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Point - Contact",
};

export default function ContactPage() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-gray-1 bg-[radial-gradient(#222222_1px,#111111_1px)] bg-[size:20px_20px]"></div>
      <HeaderContact />
      <div className="w-full lg:max-w-4xl px-8 sm:px-12 mb-12">
        <Reveal delay={0.25}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
