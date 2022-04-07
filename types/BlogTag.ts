import { Article } from './Article';

export interface BlogTag {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    articles: { data: Article } | number;
  }
}