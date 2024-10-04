import Header from "@/app/sections/header";
import Partners from "@/app/sections/partners";
import Info from "@/app/sections/info";
import Menu from "@/app/sections/menu";
import Location from "@/app/sections/location";
import Contact from "@/app/sections/contact";
import Footer from "@/app/sections/footer";
import ScrollUp from "@/app/components/scrollUp";
import PreloaderWrapper from "@/app/components/preLoaderWrapper";

export default function Home() {
  return (
    <div className="bg-white-yellow">
      <Header />
      <PreloaderWrapper>
        <Partners />
        <Info />
        <Menu />
        <Location />
        <Contact />
        <Footer />
        <ScrollUp />
      </PreloaderWrapper>
    </div>
  );
}
