import { Menu } from "./components/Menu";

export interface FooterType {
  id: number;
  attributes: {
    subTitle: string;
    copyright: string;
    menu: { data: Menu[] } | number[];
  };
}
