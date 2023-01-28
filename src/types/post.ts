import { MicroCMSDate } from 'microcms-js-sdk';
import { Author } from './author';
import { Category } from './category';

export interface Post extends MicroCMSDate {
  id: string;
  title: string;
  description: string;
  body: string;
  author: Author;
  category: Category;
}