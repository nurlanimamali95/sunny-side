import type { Metadata } from "next";
import localFont from "next/font/local";
import { Overpass } from "next/font/google";
import "./globals.css";

const abrazScript = localFont({
  src: "./fonts/ABRAZ1.ttf",
  display: "swap",
  variable: "--font-abraz-script",
});

const savate = localFont({
  src: [
    {
      path: "./fonts/savate-italique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/savate-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-savate",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-overpass",
});

export const metadata: Metadata = {
  title: "SunnySide",
  description: "Cafe in Amsterdam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${savate.variable} ${abrazScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
