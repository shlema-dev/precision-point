import Image from "next/image";
import logo from "@/public/pp_logo.png";
import ScrollToTopButton from "./ScrollToTop";

const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-12 lg:pt-12 mx-auto lg:flex lg:justify-center bg-gray-2 border-t border-gray-6">
      <div className="lg:max-w-7xl flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-32 items-center">
        <div className="w-52">
          <Image src={logo} priority quality={100} alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:shlema.dev@gmail.com"
            className="-mt-6 lg:mt-0 text-gray-11"
          >
            shlema.dev@gmail.com
          </a>

          <a
            href="tel:+18186196236"
            className="mt-4 lg:mt-0 text-gray-11 self-center"
          >
            (818) 619-6236
          </a>
        </div>

        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
