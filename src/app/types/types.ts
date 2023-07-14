import { categories } from "./../store/features/most-selling-home-category";
export type DropDownItems = {
  id: string | number;
  name: string;
  description?: string;
  href?: string;
  icon?: any;
};

export type DropDownLink = {
  linkName: String;
  dropDownItems: DropDownItems[];
};

export type SelectorItems = {
  id: string | number;
  name: string;
  [key: string]: any;
};

export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  hoverImage?: string;
  discount?: number;
};

// navigation types
export type NavigationFeaturedItem = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type NavigationItem = {
  name: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type NavigationCategory = {
  id: string;
  name: string;
  featured: NavigationFeaturedItem[];
  sections: {
    id: string;
    name: string;
    items: NavigationItem[];
  }[];
};

export type Navigation = {
  categories: NavigationCategory[];
  mainPages: NavigationItem[];
  pages: NavigationItem[];
};

//////////////////////////
