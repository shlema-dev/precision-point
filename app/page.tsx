import Header from "@/components/home/Header";
import Services from "@/components/home/services/Services";
import Testimonials from "@/components/home/testimonials/testimonials";

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-0 z-[-2] w-full h-full lg:min-h-screen bg-gray-1 bg-[radial-gradient(#222222_1px,#111111_1px)] bg-[size:20px_20px]"></div>
      <Header />
      <Services />
      <Testimonials />
    </main>
  );
}
