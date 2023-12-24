import { IconType } from "react-icons";

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
  quantity: number;
  category: string;
  description: string;
  image: string;
  hoverImage?: string;
  imageSet?: string[];
  discount?: number;
  rating?: number;
  reviewCount?: number;
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

export type Incentives = {
  Icon: IconType;
  title: string;
  description: string;
};

export type PageReview = {
  name: string;
  review: string;
  image?: string;
};

export type Blog = {
  about: string;
  title: string;
  image: string;
  description: string;
  fullData?: string;
  author: string;
  datePublished: string;
  link: string;
};
