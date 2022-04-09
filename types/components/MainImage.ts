import { Media } from "../Media";

export interface MainImage {
  id: number;
  attributes: {
    image: { data: Media };
    attribution: string;
    altText: string;
  };
}
