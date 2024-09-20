import React from "react";
import Image from "next/image";
import uberEatsLogo from "@/app/assets/ubereatslogo.png";
import thuisbezorgLogo from "@/app/assets/thuisbezorglogo.png";

export default function Partners() {
  return (
    <section className="py-8 mb-[5rem]">
      <div className="flex item-center justify-evenly gap-[10rem]">
        <a
          href="https://www.ubereats.com/nl-en/store/sunny-side-l-jordaan/6e4mle7CSCylqc2n6H4gAg?srsltid=AfmBOopXZAfeU2a5wuQ7PbkvY3StxbqXuk42vhzn5Q2w3ftD_xcA8iFf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          <Image
            src={uberEatsLogo}
            alt="Order on Uber Eats"
            width={200}
            className="mx-auto"
          />
        </a>

        <a
          href="https://www.thuisbezorgd.nl/menu/sunny-side-1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          <Image
            src={thuisbezorgLogo}
            alt="Order on Thuisbezorgd"
            width={200}
            className="mx-auto"
          />
        </a>
      </div>
    </section>
  );
}
