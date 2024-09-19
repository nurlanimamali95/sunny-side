import Header from "@/app/sections/header";
import Hero from "@/app/sections/hero";
import Info from "@/app/sections/info";
import Menu from "@/app/sections/menu";

export default function Home() {
  return (
    <div className="px-10">
      <Header />
      <Hero />
      <Info />
      <Menu />
    </div>
  );
}
