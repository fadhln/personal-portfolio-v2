import { MainImage } from "./components/MainImage";
import { Meta } from "./components/Meta";

export interface AboutPage {
  id: number;
  attributes: {
    mainTitle: string;
    subTitle: string;
    content: string;
    techStack: string;
    metadata: Meta;
    image: MainImage;
  };
}
