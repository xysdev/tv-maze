import { ISelectedShow } from './selectedShow';
import { IShow } from './show';

export interface IShowState {
    shows: IShow[];
    showsByGenre: { [genre: string]: IShow[] };
    selectedShow: ISelectedShow;
    searchedShows: IShow[];
    loading: boolean;
}
