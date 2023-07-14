"use client";
import { CSSTransition } from "react-transition-group";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";

interface PlusComponentProps {
  dropDownOpen: boolean;
  dropDownToggle: () => void;
}

export const PlusDownIcon: React.FC<PlusComponentProps> = ({
  dropDownOpen,
  dropDownToggle,
}) => {
  return (
    <CSSTransition
      in={dropDownOpen}
      timeout={0}
      classNames={{
        enter: styles.hamburger2AnimEnter,
        enterDone: styles.hamburger2AnimEnterDone,
        exit: styles.hamburger2AnimExit,
        exitDone: styles.hamburger2AnimExitDone,
      }}
    >
      <div onClick={dropDownToggle} className={styles.hamburger2}>
        {[0, 1].map((i) => (
          <div key={i} className={styles.hamburger2Line}></div>
        ))}
      </div>
    </CSSTransition>
  );
};
