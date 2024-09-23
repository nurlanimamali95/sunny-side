import Accordion from "@/app/components/accordion";

export default function Info() {
  return (
    <div className="flex flex-col lg:flex-row gap-[5rem] lg:gap-[7rem]">
      <div className="flex flex-col lg:justify-between gap-[2rem] lg:w-[40%]">
        <h2 className="font-semibold text-small md:text-lg lg:text-xl">
          Discover the Authentic Flavors of Eastern Europe in the Heart of
          Amsterdam, with Vegan and Vegetarian Delights.
        </h2>
        <p className="text-small md:text-lg lg:text-xl">
          At Sunny Side, we bring you a unique dining experience where Eastern
          European tradition meets modern culinary innovation. From hearty
          all-day breakfasts to fresh seasonal dishes, we cater to all tastes
          with a variety of vegan and vegetarian options. Whether you&apos;re
          indulging in handcrafted crêpes, savoring traditional kibinai, or
          exploring plant-based delights like our vegan borscht, every dish is
          crafted with love and the freshest ingredients. Enjoy an unforgettable
          meal where every bite tells a story of flavor, heritage, and
          inclusivity.
        </p>
      </div>
      <Accordion />
    </div>
  );
}
