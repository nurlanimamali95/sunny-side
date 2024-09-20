"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/app/utils/useWindowSize";

export default function Accordion() {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  title: string;
  imgSrc: string;
  description: string;
}

function Panel({ open, setOpen, id, title, imgSrc, description }: PanelProps) {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className=" font-overpass hover:bg-primary-black hover:text-primary-white bg-dark-yellow transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-primary-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-white-yellow/40 backdrop-blur-sm text-primary-black"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "All-Day Breakfast",
    imgSrc: "/images/breakfast.jpg",
    description:
      "Whether you're an early riser or not, our all-day breakfast has something for everyone. From fluffy pancakes to savory crêpes, enjoy your favorite breakfast dishes anytime. Perfect for those who want to start their day with a touch of indulgence.",
  },
  {
    id: 2,
    title: "Eastern European Dishes",
    imgSrc: "/images/classics.jpg",
    description:
      "Experience authentic Eastern European flavors with dishes like kibinai (traditional mini pies) and cabbage rolls. These recipes are passed down through generations, bringing rich, home-cooked warmth to your plate right here in Amsterdam.",
  },
  {
    id: 3,
    title: "Fresh & Local",
    imgSrc: "/images/ingredients.jpg",
    description:
      "We prioritize using fresh, seasonal ingredients in all of our meals. From locally sourced vegetables to responsibly caught salmon, our dishes are crafted to bring out the best natural flavors. Sustainability and quality are key in every bite.",
  },
  {
    id: 4,
    title: "Vegan Options",
    imgSrc: "/images/vegan.jpg",
    description:
      "Sunny Side offers a variety of vegan and vegetarian dishes to cater to every diet. Enjoy flavorful creations like our vegan borscht or vegetarian dumplings, ensuring every guest can enjoy our Eastern European specialties.",
  },
];
