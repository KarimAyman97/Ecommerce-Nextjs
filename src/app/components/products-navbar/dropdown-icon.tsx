import { CSSTransition } from "react-transition-group";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const DropDownIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: "transition-transform ease duration-300",
        enterActive: "rotate-180",
        enterDone: "rotate-180",
        exit: "transition-transform ease-in duration-150",
        exitActive: "rotate-0",
        exitDone: "rotate-0",
      }}
    >
      <ChevronDownIcon
        className="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
    </CSSTransition>
  );
};
