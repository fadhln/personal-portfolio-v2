import { MainImage } from "./components/MainImage";
import { Meta } from "./components/Meta";

export interface Homepage {
  id: number;
  attributes: {
    overviewTitle: string;
    overviewContent: string;
    aboutmeContent: string;
    opportunitiesTitle: string;
    opportunitiesContent: string;
    metadata: Meta;
    navigationPhoto: { data: MainImage } | number;
  };
}
