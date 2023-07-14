import React, { MouseEventHandler } from "react";

interface SidebarNavBtnProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export const SidebarNavBtn: React.FC<SidebarNavBtnProps> = ({
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-100 h-100 font-semibold leading-7 text-gray-900 px-3 py-3 bg-black bg-opacity-10`}
    >
      {children}
    </button>
  );
};
