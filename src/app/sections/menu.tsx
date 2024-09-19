import Accordion from "@/app/components/menuAccordion";

export default function Menu() {
  return (
    <div>
      <h2 className="font-bold text-2xl my-[7rem] text-center">
        Explore Our Menu
      </h2>
      <div className="h-[80vh]">
        <Accordion />
      </div>
    </div>
  );
}
