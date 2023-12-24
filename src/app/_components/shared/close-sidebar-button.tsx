import { XMarkIcon } from "@heroicons/react/24/outline";

interface CloseSideBarButtonProps {
  onClick: () => void;
}
export const CloseSideBarButton = ({ onClick }: CloseSideBarButtonProps) => {
  return (
    <button
      type="button"
      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
      onClick={onClick}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
