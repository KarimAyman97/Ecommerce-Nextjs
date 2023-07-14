import { Popover, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { DropDownIcon } from "../icons/dropdown-icon";
import Link from "next/link";
import Image from "next/image";
import { NavigationCategory } from "@/app/types/types";

interface DropDownMenuProps {
  menu: NavigationCategory;
}

export const NavDropDownMenu: React.FC<DropDownMenuProps> = ({ menu }) => {
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
    <Popover className="flex" ref={popoverRef}>
      {({ open }) => (
        <>
          <div className=" flex items-center">
            <Popover.Button
              onMouseEnter={handleLinkMouseEnter}
              onMouseLeave={handleLinkMouseLeave}
              onFocus={handleLinkMouseEnter}
              onBlur={handleLinkMouseLeave}
              className={`
                    ${
                      shouldPopoverStayOpen
                        ? " text-rose-400"
                        : "border-transparent text-gray-700 hover:text-gray-800"
                    }
                    z-10   flex items-center  outline-none   pt-px text-sm font-medium transition-colors duration-200 ease-out mx-3`}
            >
              {menu.name}
              <DropDownIcon isOpen={shouldPopoverStayOpen} />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            show={shouldPopoverStayOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              className="absolute top-12 left-1/4  text-sm text-gray-500"
              onMouseEnter={handlePopoverMouseEnter}
              onMouseLeave={handlePopoverMouseLeave}
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div
                className="absolute w-100 bg-white shadow"
                aria-hidden="true"
              />

              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                      {menu.featured.map((item) => (
                        <div
                          key={item.name}
                          className="group relative text-base sm:text-sm"
                        >
                          <div className="aspect-h-16 aspect-w-9 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              fill={true}
                              className="object-cover object-center"
                            />
                          </div>
                          <Link
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                      {menu.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${section.name}-heading`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${section.name}-heading`}
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flex">
                                <Link
                                  href={item.href}
                                  className="hover:text-gray-800"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
