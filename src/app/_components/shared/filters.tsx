"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import "./filters.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import {
  changeRowCountLargeScreens,
  changeRowCountMediumScreens,
  changeRowCountSmallScreens,
} from "@/app/_store/features/product-row-count.slice";
import { useWindowSize } from "react-use";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters({ children }: { children: React.ReactNode }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const selectedRowProductCountLargeScreens = useAppSelector(
    (state) => state.countInRowProducts.countInRowLargeScreens
  );
  const selectedRowProductCountMediumScreens = useAppSelector(
    (state) => state.countInRowProducts.countInRowMediumScreens
  );
  const selectedRowProductCountSmallScreens = useAppSelector(
    (state) => state.countInRowProducts.countInRowSmallScreens
  );

  const changeselectedRowProductCountSmallScreens = (number: number) => {
    dispatch(changeRowCountSmallScreens(number));
  };
  const changeselectedRowProductCountMediumScreens = (number: number) => {
    dispatch(changeRowCountMediumScreens(number));
  };
  const changeselectedRowProductCountLargeScreens = (number: number) => {
    dispatch(changeRowCountLargeScreens(number));
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 "
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-50 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <Link
                            href={category.href}
                            className="block px-2 py-3"
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-baseline justify-between border-b border-gray-200  pt-10">
            <h1 className="text-lg font-bold tracking-tight text-gray-900 w-28">
              New Arrivals
            </h1>
            {/* number of products per row */}
            <div className="flex items-center justify-center  flex-nowrap">
              {/* small screens */}
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountSmallScreens(1)}
                className="w-[29px] h-[26px] transition duration-250
                mr-[10px] row-count relative block md:hidden border border-black mt-3 "
              ></Link>
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountSmallScreens(2)}
                className="w-[28px] h-[26px] transition duration-250
               mr-[10px] row-count  relative border block md:hidden border-black mt-3"
              ></Link>
              {/*medium Screens */}
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountMediumScreens(2)}
                className="w-[28px] h-[26px] transition duration-250
               mr-[10px] row-count  relative border hidden md:block lg:hidden  border-black mt-3"
              ></Link>
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountMediumScreens(3)}
                className="w-[42px] h-[26px] transition duration-250
                mr-[10px] row-count  relative hidden md:block lg:hidden border border-black mt-3"
              ></Link>
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountMediumScreens(4)}
                className="w-[55px] h-[26px] transition duration-250
               mr-[10px] row-count  relative hidden md:block lg:hidden border border-black mt-3"
              ></Link>
              {/*large Screens */}
              {/* number is increased by one because the side bar is block now and counted as column */}
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountLargeScreens(3)}
                className="w-[42px] h-[26px] transition duration-250
                mr-[10px] row-count  relative hidden lg:block border border-black mt-3"
              ></Link>
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountLargeScreens(4)}
                className="w-[55px] h-[26px] transition duration-250
               mr-[10px] row-count  relative hidden lg:block border border-black mt-3"
              ></Link>
              <Link
                href="#"
                onClick={() => changeselectedRowProductCountLargeScreens(5)}
                className="w-[68px] h-[26px] transition duration-250
               mr-[10px] row-count  relative hidden lg:block border border-black mt-3"
              ></Link>
            </div>

            <div className="flex items-center w-28">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group  inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                  <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <Link
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 "
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div
              className={`grid gap-x-8 gap-y-10
              ${
                selectedRowProductCountSmallScreens == 1
                  ? "grid-cols-1"
                  : "grid-cols-2"
              }
              ${
                selectedRowProductCountMediumScreens == 2
                  ? "md:grid-cols-2"
                  : selectedRowProductCountMediumScreens == 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-4"
              }
              ${
                selectedRowProductCountLargeScreens == 3
                  ? "lg:grid-cols-3"
                  : selectedRowProductCountLargeScreens == 4
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-5"
              }`}
            >
              {/* Product grid */}
              {children}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
