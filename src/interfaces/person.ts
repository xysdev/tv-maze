import { ICountry } from './country';
import { IImage } from './image';

export interface IPerson {
    id: number;
    url: string;
    name: string;
    country: ICountry;
    birthday: string;
    deathday: string | null;
    gender: string;
    image: IImage;
}
