import { ShareImage } from "./ShareImage";

export interface Meta {
  id?: number;
  metaTitle: string;
  metaDescription?: string;
  shareImage?: ShareImage;
  keywords?: string;
}
