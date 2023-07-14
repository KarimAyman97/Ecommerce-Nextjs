import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center justify-center   w-100   px-6 py-3 rounded-full  border-2">
      <input
        className=" h-full w-full outline-none text-sm text-gray-700 bg-transparent "
        type="text"
        id="search"
        placeholder="Search something.."
      />
      <div className="place-items-center h-full cursor-pointer ">
        <MagnifyingGlassIcon className="h-6 w-6 " />
      </div>
    </div>
  );
};
