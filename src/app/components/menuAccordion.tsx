"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { items, MenuItem } from "@/app/utils/menuData";

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="p-4">
      <div className="flex flex-col h-fit w-full max-w-6xl mx-auto shadow overflow-hidden">
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
    <>
      <button
        className="hover:bg-black hover:text-white bg-yellow-300 transition-colors p-3 border-b-[1px] border-slate-200 flex flex-row justify-between items-center gap-4 relative group"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        <span className="block text-xl font-light">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-white flex items-start"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 w-full"
            >
              <ul className="space-y-6">
                {description.map((menuItem: MenuItem, index: number) => (
                  <li
                    key={index}
                    className="flex justify-between items-start border-b border-gray-300 py-4"
                  >
                    <div className="max-w-lg">
                      <h3 className="text-lg font-semibold">
                        {menuItem.name}
                        {menuItem.isVegan && (
                          <span className="ml-2 text-green-500">🌱</span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {menuItem.details}
                      </p>
                    </div>
                    <div className="text-right">
                      {menuItem.priceSmall && (
                        <p className="text-sm font-light">
                          Small: {menuItem.priceSmall}
                        </p>
                      )}
                      {menuItem.priceBig && (
                        <p className="text-sm font-light">
                          Big: {menuItem.priceBig}
                        </p>
                      )}
                      {menuItem.price && (
                        <p className="text-sm font-light">
                          Price: {menuItem.price}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const panelVariants = {
  open: {
    height: "700px",
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
