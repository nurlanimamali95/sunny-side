"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { items, MenuItem } from "@/app/utils/menuData";

export default function MenuAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="p-4 pt-0">
      <div className="flex flex-col h-fit w-full mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <div className="bg-gray-100 text-gray-700 p-4 mb-6  w-fit border-t-0">
        <p className="text-sm">
          <span>🌱</span> indicates vegetarian options.
          <span className="ml-2">🌱🌱</span> indicates vegan options.
        </p>
      </div>
    </section>
  );
}

interface PanelProps {
  open: number | null;
  setOpen: Dispatch<SetStateAction<number | null>>;
  id: number;
  title: string;
  description: MenuItem[];
}

function Panel({ open, setOpen, id, title, description }: PanelProps) {
  const isOpen = open === id;

  return (
    <div>
      <button
        className="hover:bg-primary-black hover:text-primary-white bg-dark-yellow transition-colors p-3 border-b-[1px] border-slate-200 flex flex-row justify-between items-center gap-4 relative group w-full"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        <span className="block text-4xl font-light font-abraz-script">
          {title}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-primary-white flex items-start"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 w-full"
            >
              <ul>
                {description.map((menuItem: MenuItem, index: number) => (
                  <li
                    key={index}
                    className="flex justify-between items-start border-b border-gray-300 py-4"
                  >
                    <div className="max-w-lg">
                      <h3 className="text-lg font-semibold">
                        {menuItem.name}
                        {menuItem.isVegan && (
                          <span className="ml-2 text-green-500">🌱🌱</span>
                        )}
                        {menuItem.isVegeterian && (
                          <span className="ml-2 text-green-500">🌱</span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {menuItem.details}
                      </p>
                      {menuItem.sides && menuItem.sides.length > 0 && (
                        <div className="mt-2">
                          {menuItem.sides.map((side, sideIndex) => (
                            <div key={sideIndex} className="mb-4">
                              <h4 className="font-semibold">{side.title}</h4>
                              <ul className="list-disc pl-5 mt-1">
                                {side.list.map((sideItem, listIndex) => (
                                  <li
                                    key={listIndex}
                                    className="text-sm text-gray-500"
                                  >
                                    {sideItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      {menuItem.priceSmall && (
                        <p className="text-[1rem] font-semibold">
                          Small: {menuItem.priceSmall}
                        </p>
                      )}
                      {menuItem.priceBig && (
                        <p className="text-[1rem] font-semibold">
                          Big: {menuItem.priceBig}
                        </p>
                      )}
                      {menuItem.price && (
                        <p className="text-[1rem] font-semibold">
                          {menuItem.price}
                        </p>
                      )}
                      {menuItem.extras && (
                        <ul className="">
                          {menuItem.extras.map((extra, extraIndex) => (
                            <li
                              key={extraIndex}
                              className="text-[1rem] font-bold"
                            >
                              {extra}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const panelVariants = {
  open: {
    height: "auto",
  },
  closed: {
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
