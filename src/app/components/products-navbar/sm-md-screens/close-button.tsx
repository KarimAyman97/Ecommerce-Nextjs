import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";
import { AppDispatch } from "@/app/store/store";
import { useDispatch } from "react-redux";
import { closeMenu } from "@/app/store/features/section-header.slice";

export const CloseSidebarButton = () => {
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
