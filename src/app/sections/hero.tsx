import Image from "next/image";
import hero from "@/app/assets/hero.jpg";

export default function Hero() {
  return (
    <div className="relative h-[50vh] lg:h-[95vh] mb-[5rem]">
      <div className="absolute inset-0 bg-primary-black opacity-40 z-10"></div>
      <Image
        src={hero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold text-center w-[70%] font-savate text-dark-yellow">
          Amsterdam&apos;s first restaurant specializing in authentic Eastern
          European cuisine.
        </h1>
      </div>
    </div>
  );
}
