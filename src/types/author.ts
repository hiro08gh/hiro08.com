import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

export interface Author extends MicroCMSDate {
  id: string;
  name: string;
  description: string;
  image: MicroCMSImage;
}
