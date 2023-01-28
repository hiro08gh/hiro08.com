import { MicroCMSDate } from 'microcms-js-sdk';

export interface Category extends MicroCMSDate {
  id: string;
  name: string;
}
