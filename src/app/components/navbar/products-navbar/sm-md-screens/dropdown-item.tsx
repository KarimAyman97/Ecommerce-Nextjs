"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { DropDownLink } from "@/app/types/types";
import { Fragment } from "react";
import { PlusDownIcon } from "@/app/components/icons/plus-minus-icon";

interface DropDownMenuSideBarProps {
  dropDownOpen: boolean;
  dropDownToggle: () => void;
  dropDown: DropDownLink;
}

export const DropDownMenuSideBar: React.FC<DropDownMenuSideBarProps> = ({
  dropDownOpen,
  dropDownToggle,
  dropDown,
}) => {
  return (
    <Disclosure as="div" className="-mx-3">
      <Disclosure.Button
        onClick={dropDownToggle}
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {dropDown.linkName}
        <PlusDownIcon
          dropDownOpen={dropDownOpen}
          dropDownToggle={dropDownToggle}
        />
      </Disclosure.Button>
      <Transition
        as={Fragment}
        show={dropDownOpen}
        enter="transform transition ease-in-out duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <Disclosure.Panel className="mt-2 space-y-2">
          {[...dropDown.dropDownItems].map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};
