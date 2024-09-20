import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      overpass: ["var(--font-overpass)"],
      savate: ["var(--font-savate)"],
      "abraz-script": ["var(--font-abraz-script)"],
    },
    colors: {
      "primary-black": "#000000",
      "primary-white": "#FFFFFF",
      "white-yellow": "#FFFCC2",
      "mid-yellow": "#FFF985",
      "dark-yellow": "#FFF20A",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
