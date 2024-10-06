import localFont from "next/font/local";
import { Overpass } from "next/font/google";

export const savate = localFont({
  src: [
    {
      path: "./savate/savate-italique.otf",
      weight: "400",
      style: "italique",
    },
    {
      path: "./savate/savate-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-savate",
});

export const abrazScript = localFont({
  src: "/fonts/abraz-script/ABRAZ1.ttf",
  display: "swap",
  variable: "--font-abraz-script",
});

export const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-overpass",
});
