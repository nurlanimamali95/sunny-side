import MenuAccordion from "@/app/components/menuAccordion";
import DownloadSection from "@/app/components/download";

export default function Menu() {
  return (
    <div id="menu" className="container mx-auto px-4">
      <h2 className="font-bold text-2xl my-[7rem] text-center">
        Explore Our Menu
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full md:w-[70%]">
          <MenuAccordion />
        </div>

        <div className="w-full md:w-[30%]">
          <DownloadSection />
        </div>
      </div>
    </div>
  );
}
