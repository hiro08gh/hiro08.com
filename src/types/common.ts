import { ParsedUrlQuery } from 'node:querystring';

export interface Params extends ParsedUrlQuery {
  id: string;
}
