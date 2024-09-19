import Image from "next/image";
import Nav from "@/app/components/nav";
import logo from "@/app/assets/logo.svg";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" height={70} />
        <Nav />
      </div>
    </div>
  );
}
