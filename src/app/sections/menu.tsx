import MenuAccordion from "@/app/components/menuAccordion";
import DownloadSection from "@/app/components/download";

export default function Menu() {
  return (
    <div>
      <h2 className="font-bold text-2xl my-[7rem] text-center">
        Explore Our Menu
      </h2>
      <div className="">
        <MenuAccordion />
        <DownloadSection />
      </div>
    </div>
  );
}
