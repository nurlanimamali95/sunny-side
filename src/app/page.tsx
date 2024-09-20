import Header from "@/app/sections/header";
import Hero from "@/app/sections/hero";
import Partners from "@/app/sections/partners";
import Info from "@/app/sections/info";
import Menu from "@/app/sections/menu";

export default function Home() {
  return (
    <div className="px-2 md:px-10 bg-white-yellow">
      <Header />
      <Hero />
      <Partners />
      <Info />
      <Menu />
    </div>
  );
}
