import type { Metadata } from "next";
import { overpass, savate, abrazScript } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SunnySide",
  description: "Cafe in Amsterdam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${savate.variable} ${abrazScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
