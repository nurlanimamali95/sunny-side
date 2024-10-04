"use client";

import { useState } from "react";
import Preloader from "@/app/components/preLoaderPage";
import Hero from "@/app/sections/hero";

type PreloaderWrapperProps = {
  children: React.ReactNode;
};

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      {showContent && (
        <div>
          <Hero />
          {children}
        </div>
      )}
    </>
  );
}
