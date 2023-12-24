"use client";
import { Fragment, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { DropDownLink } from "@/app/_types/types";
import Image from "next/image";
import { DropDownIcon } from "@/app/_components/icons/dropdown-icon";
import Link from "next/link";

type DropDownMenuProps = {
  dropDown: DropDownLink;
  linkStyle?: string;
};

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  dropDown,
  linkStyle,
}) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleLinkMouseEnter = () => {
    setIsLinkHovered(true);
  };

  const handleLinkMouseLeave = () => {
    setIsLinkHovered(false);
  };

  const handlePopoverMouseEnter = () => {
    setIsPopoverHovered(true);
  };

  const handlePopoverMouseLeave = () => {
    setIsPopoverHovered(false);
  };

  const shouldPopoverStayOpen = isLinkHovered || isPopoverHovered;

  return (
    <Popover className="" ref={popoverRef}>
      <button
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
        onFocus={handleLinkMouseEnter}
        onBlur={handleLinkMouseLeave}
        className={`flex items-center gap-x-1 focus:outline-none  ${
          linkStyle ?? ""
        } `}
      >
        {dropDown.linkName}
        <DropDownIcon isOpen={shouldPopoverStayOpen} />
      </button>

      <Transition
        as={Fragment}
        show={shouldPopoverStayOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
          className="absolute left-1/2 transform -translate-x-1/2 top-22  z-10 mt-3 w-full max-w-10xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="p-4 grid grid-cols-3 gap-4">
            {dropDown.dropDownItems.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-none">
                  {typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={10}
                      height={10}
                      priority
                      className="h-10 w-10 text-gray-600 group-hover:filter-none filter  grayscale transition duration-300"
                    />
                  ) : (
                    <item.icon
                      className="h-10 w-10 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-auto">
                  <Link
                    href={item.href ?? "/home"}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
