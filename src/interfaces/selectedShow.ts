import { IActor } from './actor';
import { ISeason } from './season';
import { IShow } from './show';

export interface ISelectedShow extends IShow {
    casts: Array<IActor>;
    summary: string;
    updated: number;
    seasons: Array<ISeason>;
}
