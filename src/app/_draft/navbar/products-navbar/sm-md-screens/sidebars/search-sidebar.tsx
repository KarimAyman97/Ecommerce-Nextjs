import Selector from "@/app/_components/shared/selector";
import { SelectorItems } from "@/app/_types/types";
import { cookwareProducts, servewareProducts } from "../../products";
import { SearchInput } from "@/app/_components/shared/search-input";

export const SearchSideBar = () => {
  const selectorItems: SelectorItems[] = [
    ...cookwareProducts.dropDownItems,
    ...servewareProducts.dropDownItems,
    {
      name: "All Categories",
      id: "0",
    },
  ];
  return (
    <div className="mt-6 flow-root px-6">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Selector dropItems={selectorItems} itemType="Category" />
          <SearchInput />
        </div>
      </div>
    </div>
  );
};
