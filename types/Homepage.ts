import { Attributes } from "./components/Attributes";
import { MainImage } from "./components/MainImage";
import { Meta } from "./components/Meta";

interface HomepageAttributes extends Attributes {
  overviewTitle: string;
  overviewContent: string;
  aboutmeContent: string;
  opportunitiesTitle: string;
  opportunitiesContent: string;
  metadata: Meta;
  navigationPhoto: MainImage;
}

export interface Homepage {
  id: number;
  attributes: HomepageAttributes;
}
