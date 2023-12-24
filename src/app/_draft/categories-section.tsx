import { Category, CategoriesItem } from "./categories-item";

const categories: Category[] = [
  {
    id: 1,
    name: "Dinner sets",
    image: "/imgs/categories/dinner-set.jpg",
    link: "/category1",
  },
  {
    id: 2,
    name: "Drinkware",
    image: "/imgs/categories/drink-ware.jpg",
    link: "/category2",
  },
  {
    id: 3,
    name: "Trays & Bowls",
    image: "/imgs/categories/trays-bowls.jpg",
    link: "/category2",
  },
  {
    id: 4,
    name: "Cooking Tools",
    image: "/imgs/categories/cooking-tools.jpg",
    link: "/category2",
  },
  {
    id: 5,
    name: "Food Buckets",
    image: "/imgs/categories/food-buckets.jpg",
    link: "/category2",
  },
  {
    id: 6,
    name: "Pans",
    image: "/imgs/categories/pans.jpg",
    link: "/category2",
  },
  {
    id: 7,
    name: "Serving Stands",
    image: "/imgs/categories/serving-stands.jpg",
    link: "/category2",
  },
  {
    id: 8,
    name: "Serving Plates",
    image: "/imgs/categories/serving-plates.jpg",
    link: "/category2",
  },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-4 md:grid-rows-4 grid-col-2 grid-rows-7 gap-3 lg:mt-56 md:mt-36 mt-72">
        {/* Large Image */}
        <div className="col-span-2 row-span-2">
          <CategoriesItem size="h-48 md:h-72 w-full" category={categories[0]} />
        </div>
        {/* Small Images */}
        <div className="col-span-1 row-span-1">
          <CategoriesItem size="h-36 w-full" category={categories[1]} />
        </div>
        <div className="col-span-1 row-span-1">
          <CategoriesItem size="h-36 w-full" category={categories[2]} />
        </div>
        <div className="col-span-1 row-span-1">
          <CategoriesItem size="h-32 w-full" category={categories[3]} />
        </div>
        <div className="col-span-1 row-span-1">
          <CategoriesItem size="h-32 w-full" category={categories[4]} />
        </div>
        <div className="col-span-2 row-span-2">
          <CategoriesItem size="h-48 md:h-72 w-full" category={categories[5]} />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2">
          <CategoriesItem size="h-32 md:h-72 w-full" category={categories[6]} />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2">
          <CategoriesItem size="h-32 md:h-72 w-full" category={categories[7]} />
        </div>
      </div>
    </section>
  );
};
