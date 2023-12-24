"use client";
import React, { Fragment } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FlagIcon } from "react-flag-kit";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const LanguageSection: React.FC = () => {
  const [language, setLanguage] = React.useState("English");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full  justify-center gap-x-2  rounded-md bg-none px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
          {language}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 my-0 origin-top-right divide-y
         divide-gray-100 rounded-md bg-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {language === "العربية" && (
            <div onClick={() => setLanguage("English")}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 my-0 text-sm cursor-pointer"
                    )}
                  >
                    English
                  </div>
                )}
              </Menu.Item>
            </div>
          )}
          {language === "English" && (
            <div onClick={() => setLanguage("العربية")}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 my-0 text-sm cursor-pointer"
                    )}
                  >
                    العربية
                  </div>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
