"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const commonClasses = clsx(
    "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white-yellow transition-all",
    "before:absolute before:h-0 before:w-0 before:rounded-full before:bg-dark-yellow before:duration-[400ms] before:ease-in-out",
    "hover:shadow-mid-yellow hover:before:h-56 hover:before:w-56 hover:rounded-lg"
  );

  return (
    <li className={commonClasses}>
      <Link href={href} className="relative z-10" onClick={onClick}>
        {label}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="hidden lg:block">
        <ul className="flex gap-[5rem] text-primary-black uppercase font-semibold">
          <NavItem href="#menu" label="Menu" />
          <NavItem href="#locations" label="Locations" />
          <NavItem href="#contact" label="Contact" />
        </ul>
      </div>

      <div className="lg:hidden">
        <button
          className="focus:outline-none text-primary-black bg-white-yellow"
          onClick={toggleMenu}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
                x: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12h16"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 18h16"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
                x: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-fit bg-primary-white shadow-lg lg:rounded-lg z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col text-primary-black uppercase font-semibold">
                <NavItem href="#menu" label="Menu" onClick={closeMenu} />
                <NavItem
                  href="#locations"
                  label="Locations"
                  onClick={closeMenu}
                />
                <NavItem href="#contact" label="Contact" onClick={closeMenu} />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
