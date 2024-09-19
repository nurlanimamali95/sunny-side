import Accordion from "@/app/components/accordion";

export default function Info() {
  return (
    <div className="lg:flex">
      <div className="flex flex-col gap-7 w-[40%]">
        <h2 className="font-semibold text-xl">
          Discover the Authentic Flavors of Eastern Europe in the Heart of
          Amsterdam, with Vegan and Vegetarian Delights
        </h2>
        <p>
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
