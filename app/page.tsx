import Header from "@/components/home/Header";
import Services from "@/components/home/services/Services";
import Testimonials from "@/components/home/testimonials/testimonials";

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-10] w-full h-full lg:min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Header />
      <Services />
      <Testimonials />
    </main>
  );
}
