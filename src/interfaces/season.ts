import { IEpisode } from './episode';

export interface ISeason {
    season: number;
    episodes: Array<IEpisode>;
}
