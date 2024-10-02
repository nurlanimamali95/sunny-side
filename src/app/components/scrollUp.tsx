"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.innerHeight;
      setIsVisible(currentHeight > 560 && window.scrollY > 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="z-index-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={scrollToTop}
            className="fixed right-[0.5em] bottom-[3em] bg-dark-yellow p-[0.3em] opacity-[0.8] border-[0.1em] flex items-center justify-center md:p-[0.5em] hover:border-dark-yellow hover:text-primary-white hover:bg-primary-black"
          >
            <FaArrowUp />
          </button>
        </motion.div>
      )}
    </>
  );
}
