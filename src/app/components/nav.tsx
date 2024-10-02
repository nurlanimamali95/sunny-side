import Link from "next/link";
import clsx from "clsx";

function NavItem({ href, label }: { href: string; label: string }) {
  const commonClasses = clsx(
    "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-yellow transition-all",
    "before:absolute before:h-0 before:w-0 before:rounded-full before:bg-dark-yellow before:duration-500 before:ease-out",
    "hover:shadow-mid-yellow hover:before:h-56 hover:before:w-56"
  );

  return (
    <li className={commonClasses}>
      <Link href={href} className="relative z-10">
        {label}
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-[5rem] text-primary-black uppercase font-semibold">
        <NavItem href="#menu" label="Menu" />
        <NavItem href="#locations" label="Locations" />
        <NavItem href="#contact" label="Contact" />
      </ul>
    </div>
  );
}
