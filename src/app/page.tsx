import Header from "@/app/sections/header";
import Hero from "@/app/sections/hero";
import Partners from "@/app/sections/partners";
import Info from "@/app/sections/info";
import Menu from "@/app/sections/menu";
import Location from "@/app/sections/location";
import Contact from "@/app/sections/contact";
import Footer from "@/app/sections/footer";
import ScrollUp from "@/app/components/scrollUp";

export default function Home() {
  return (
    <div className="bg-white-yellow">
      <Header />
      <Hero />
      <Partners />
      <Info />
      <Menu />
      <Location />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}
