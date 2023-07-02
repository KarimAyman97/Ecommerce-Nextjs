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
