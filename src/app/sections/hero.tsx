"use client"; // Required because we're using client-side hooks and animations

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/app/assets/hero.jpg";

export default function Hero() {
  return (
    <motion.div
      className="relative h-screen lg:h-[95vh] mb-[5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-primary-black opacity-40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={hero}
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
      >
        <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold text-center w-fit lg:w-[70%] font-savate text-dark-yellow">
          Amsterdam&apos;s first restaurant specializing in authentic Eastern
          European cuisine.
        </h1>
      </motion.div>
    </motion.div>
  );
}
