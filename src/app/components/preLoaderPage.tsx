"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoText from "@/app/assets/logoText";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!loading) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ backgroundColor: "#000000" }}
      animate={{
        backgroundColor: ["#000000", "#FFF985", "#FFFCC2"],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
      }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-yellow-400"
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: 100,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <LogoText />
        </motion.div>
      </div>
    </motion.div>
  );
}
