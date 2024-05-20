import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import logo from "@/public/pp_logo.png";

const NavBar: React.FC = () => {
  return (
    <div className="z-20 w-full h-24 absolute top-6 left-0 right-0 mx-auto pl-4 pr-8 lg:max-w-6xl lg:px-8 flex justify-between items-center">
      <Link href={"/"} className="pt-2 w-52">
        <Image src={logo} priority quality={100} alt="logo" />
      </Link>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default NavBar;
