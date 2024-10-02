import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import LogoFooter from "@/app/assets/logoFooter";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white-yellow py-4">
      <div className="px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <LogoFooter />
          </div>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="https://instagram.com" target="_blank">
              <SiInstagram/>
            </Link>
          </li>
          <li>
            <Link href="https://whatsapp.com" target="_blank">
              <SiWhatsapp />
            </Link>
          </li>
        </ul>
        <div className="text-sm text-right">
          <div>© Copyright 2024, made by NI</div>
        </div>
      </div>
    </footer>
  );
}
