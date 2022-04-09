import { Meta } from "./components/Meta";
import { MainImage } from "./components/MainImage";
import { BlogTag } from "./BlogTag";

export interface Article {
  id: number;
  attributes: {
    mainTitle: string;
    tag: { data: BlogTag } | number;
    mainImage: { data: MainImage } | number;
    content: string;
    slug: string;
    metadata: { data: Meta } | number;
  };
}
