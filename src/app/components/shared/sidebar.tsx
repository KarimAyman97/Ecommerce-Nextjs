import { closeMenu } from "@/app/store/features/section-header.slice";
import { AppDispatch } from "@/app/store/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";

interface SidebarProps {
  menuOpen: boolean;
  onCloseMenuHandler: () => void;
  children: React.ReactNode;
}
export const Sidebar: React.FC<SidebarProps> = ({
  menuOpen,
  onCloseMenuHandler,
  children,
}) => {
  return (
    <Transition show={menuOpen} as={Fragment}>
      <Dialog as="div" className="lg:hidden" onClose={onCloseMenuHandler}>
        {/* backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20" />
        </Transition.Child>

        {/* sidebar  */}
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0  z-10 w-80  bg-white sm:ring-1 sm:ring-gray-900/10 transform transition-transform ease-in-out duration-300">
            <div className=" absolute -left-12 bg-black bg-opacity-10 px-2 py-2 ">
              <CloseSidebarButton />
            </div>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

// close button fr the sidebar
const CloseSidebarButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onCloseMobileMenuHandler = () => {
    dispatch(closeMenu());
  };
  return (
    <Transition.Child
      as={Fragment}
      enter={styles.hamburgerAnimEnter}
      enterTo={styles.hamburgerAnimEnterDone}
      leave={styles.hamburgerAnimExit}
      leaveTo={styles.hamburgerAnimExitDone}
    >
      <button
        type="button"
        className={styles.hamburger}
        onClick={onCloseMobileMenuHandler}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className={styles.hamburgerLine}></div>
        ))}
      </button>
    </Transition.Child>
  );
};
