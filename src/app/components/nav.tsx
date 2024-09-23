import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-5 pr-0 hidden lg:block">
      <ul className="flex gap-[5rem] font-medium text-black">
        <li>
          <Link href="#menu" >
            Menu
          </Link>
        </li>
        <li>
          <Link href="#locations" >
            Locations
          </Link>
        </li>
        <li>
          <Link href="#aboutus" >
            About Us
          </Link>
        </li>
        <li>
          <Link href="#contact" >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
