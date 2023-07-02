"use client";

import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SelectorItems } from "@/app/types/types";

interface SelectorProps {
  dropItems: SelectorItems[];
  itemType: string;
}

const Selector: React.FC<SelectorProps> = ({ dropItems, itemType }) => {
  const [items, setItems] = useState<SelectorItems[]>([]);
  const [selected, setSelected] = useState<SelectorItems>(dropItems[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sort the dropItems array by id and update the items state
    const sortedItems = [...dropItems].sort((a, b) => {
      if (typeof a.id === "number" && typeof b.id === "number") {
        return a.id - b.id;
      } else {
        // Convert the ids to strings for comparison
        const idA = String(a.id);
        const idB = String(b.id);
        return idA.localeCompare(idB);
      }
    });

    setItems(sortedItems);
    setSelected(dropItems[0]);
  }, [dropItems]);

  return (
    <div className="w-72 font-medium h-auto">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-100 px-6 py-3 flex items-center justify-between rounded-full border-2  ${
          !selected && "text-gray-700"
        }`}
      >
        {selected.name
          ? selected?.name.length > 25
            ? selected?.name.substring(0, 25) + "..."
            : selected.name
          : `Select ${itemType}`}
        <ChevronDownIcon width={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto  ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {items?.map((item) => (
          <li
            key={item?.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer`}
            onClick={() => {
              if (item?.name?.toLowerCase() !== selected.name.toLowerCase()) {
                setSelected(item);
                setOpen(false);
              }
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
