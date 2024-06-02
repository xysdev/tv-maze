import { IImage } from './image';

export interface IShow {
  id: number | string;
  name: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  webChannel?: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  image: IImage;
  summary: string;
  updated: number;
}
