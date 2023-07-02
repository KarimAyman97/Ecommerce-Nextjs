import React from "react";

export const SearchInput: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        className="w-72 font-medium h-auto bg-white px-6 py-3 border-2 rounded-full text-gray-700"
        placeholder="Search for products ..."
      />
    </div>
  );
};
