import { Menu } from './components/Menu';

export interface Footer {
  id: number;
  attributes: {
    subTitle: string;
    copyright: string;
    menu: { data: Menu[] } | number[];
  }
}