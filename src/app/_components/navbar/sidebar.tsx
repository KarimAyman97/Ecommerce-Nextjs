import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CloseSideBarButton } from "../shared/close-sidebar-button";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { closeMenu } from "@/app/_store/features/section-header.slice";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = {
  categories: [
    {
      id: "cookware",
      name: "Cookware",
      featured: [
        {
          name: "New Arrivals",
          href: "/collection/cookware-latest",
          imageSrc: "/imgs/navbar/cookware-latest.jpg",
          imageAlt: "New Arrivals Alt",
        },
        {
          name: "Basic Cooking Tools",
          href: "/collection/cookware",
          imageSrc: "/imgs/navbar/cookware-tools.jpg",
          imageAlt: "Basic Cooking Tools",
        },
      ],
      sections: [
        {
          id: "cookware",
          name: "COOKWARE",
          items: [
            { name: "Pans", href: "/collection/pans" },
            {
              name: "Casseroles & Tajins",
              href: "/collection/casseroles-tajins",
            },
            { name: "Cooking Tools", href: "/collection/cooking-tools" },
            { name: "Browse All", href: "/collection/cookware" },
          ],
        },
      ],
    },
    {
      id: "serveware",
      name: "Serveware",
      featured: [
        {
          name: "New Arrivals",
          href: "/collection/serveware-latest",
          imageSrc: "/imgs/navbar/serveware-latest.jpg",
          imageAlt: "Serveware new arrivals",
        },
        {
          name: "Basic Serve Tools",
          href: "/collection/serveware",
          imageSrc: "/imgs/navbar/serveware-tools.jpg",
          imageAlt: "Basic Serve Tools",
        },
      ],
      sections: [
        {
          id: "serveware",
          name: "ServeWare",
          items: [
            { name: "Food Buckets", href: "/collection/food-buckets" },
            { name: "Trays & Bowls", href: "/collection/trays-bowls" },
            { name: "Dinner Sets", href: "/collection/dinner-sets" },
            { name: "DrinkWare", href: "/collection/drinkware" },
            { name: "Serving Plates", href: "/collection/serving-plates" },
            { name: "Serving Stands", href: "/collection/serving-stands" },
            { name: "Browse All", href: "/collection/serveware" },
          ],
        },
      ],
    },
  ],
  mainPages: [{ name: "Home", href: "/home" }],
  pages: [{ name: "Best Sellers", href: "/collection/best-seller" }],
};

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const direction = useAppSelector((state) => state.direction.direction);
  const productSideBarOpen = useAppSelector(
    (state) => state.productSidebar.isOpen
  );
  const onCloseSidebarHandler = () => {
    dispatch(closeMenu());
  };
  return (
    <Transition.Root show={productSideBarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onCloseSidebarHandler}
      >
        <BackDrop />
        <div className="fixed inset-0 z-50 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom={`${
              direction === "ltr" ? "-translate-x-full" : "translate-x-full"
            }`}
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo={`${
              direction === "ltr" ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              {/* close button */}
              <div className="flex px-4 pb-2 pt-5">
                <CloseSideBarButton onClick={onCloseSidebarHandler} />
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-indigo-600 text-indigo-600"
                              : "border-transparent text-gray-900",
                            "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium transition-colors duration-300 ease-out"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="space-y-10 px-4 pb-8 pt-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                              />
                            </div>
                            <Link
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute inset-0 z-50"
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
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  href={item.href}
                                  className="-m-2 block p-2 text-gray-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {/* Main Links */}
                {navigation.mainPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </Link>
                ))}
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              {/* <LanguagePicker /> */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const BackDrop: React.FC = () => {
  return (
    // backdrop
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
  );
};

// const LanguagePicker: React.FC = () => {
//   return (
//     <div className="border-t border-gray-200 px-4 py-6">
//       <Link href="#" className="-m-2 flex items-center p-2">
//         <img
//           src="https://tailwindui.com/img/flags/flag-canada.svg"
//           alt=""
//           className="block h-auto w-5 flex-shrink-0"
//         />
//         <span className="ml-3 block text-base font-medium text-gray-900">
//           CAD
//         </span>
//         <span className="sr-only">, change currency</span>
//       </Link>
//     </div>
//   );
// };
