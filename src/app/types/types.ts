export type DropDownItems = {
  name: string;
  description?: string;
  href?: string;
  icon?: any;
};

export type DropDownLink = {
  linkName: String;
  dropDownItems: DropDownItems[];
};
