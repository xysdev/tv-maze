import { Module, ActionContext } from 'vuex';
import {
  IShow,
  ISelectedShow,
  IState,
  IShowState,
  IEpisode,
  IActor,
  ISeason,
} from '@/interfaces';

import sanitizeString from '@/utils/sanitizer';
import {
  fetchShowById,
  fetchShows,
  fetchShowsCastById,
  fetchShowsEpisodesById,
} from '@/api/showsAPI';

const mainState: IShowState = {
  shows: [],
  showsByGenre: {},
  selectedShow: {} as ISelectedShow,
  loading: false,
};

const getters = {
  getShows(state: IShowState): IShow[] {
    return state.shows;
  },
  getShowsByGenre(state: IShowState): { [genre: string]: IShow[] } {
    return state.showsByGenre;
  },
  getselectedShow(state: IShowState): ISelectedShow {
    return state.selectedShow;
  },
  getLoading(state: IShowState): boolean {
    return state.loading;
  },
};

const mutations = {
  setShows(state: IShowState, shows: IShow[]) {
    state.shows = shows;
  },
  setShowsByGenre(state: IShowState, showsByGenre: { [genre: string]: IShow[] }) {
    state.showsByGenre = showsByGenre;
  },
  setselectedShow(state: IShowState, show: ISelectedShow) {
    state.selectedShow = show;
  },
  setShowsLoading(state: IShowState, loading: boolean) {
    state.loading = loading;
  },
  categorizeShowsByGenre(state: IShowState) {
    const categorizedShows = state.shows.reduce((acc, show) => {
      show.genres.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = [];
        }
        acc[genre].push(show);
      });
      return acc;
    }, {} as { [genre: string]: IShow[] });

    state.showsByGenre = categorizedShows;
  },
  createSelectedShow(
    state: IShowState,
    data: {
      show: IShow;
      episodes: IEpisode[];
      casts: IActor[];
    },
  ) {
    const seasons = data.episodes.reduce<Record<number, ISeason>>((acc, episode) => {
      const { season } = episode;
      if (!acc[season]) {
        acc[season] = {
          season,
          episodes: [],
        };
      }

      const sanitizedEpisode = {
        ...episode,
        summary: sanitizeString(episode.summary),
        season,
      };
      acc[season].episodes.push(sanitizedEpisode);
      return acc;
    }, {});
    const seasonsArray: ISeason[] = Object.values(seasons);
    state.selectedShow = {
      ...data.show,
      seasons: seasonsArray,
      casts: data.casts,
    };
    state.loading = false;
  },
};

const actions = {
  async fetchShows({ commit }: ActionContext<IShowState, IState>, page = 0): Promise<void> {
    try {
      commit('setShowsLoading', true);
      const shows = fetchShows(page);
      commit('setShows', shows);
      commit('categorizeShowsByGenre');
    } catch (error) {
      console.error('Error fetching shows:', error);
      throw error;
    }
  },
  async fetchShowById({ commit }: ActionContext<IShowState, IState>, id: number): Promise<void> {
    try {
      commit('setShowsLoading', true);
      const [showResponse, episodesResponse, castResponse] = await Promise.all([
        fetchShowById(id),
        fetchShowsEpisodesById(id),
        fetchShowsCastById(id),
      ]);
      const data = {
        show: showResponse,
        episodes: episodesResponse,
        casts: castResponse,
      };
      commit('createSelectedShow', data);
    } catch (error) {
      console.error('Error fetching show by ID:', error);
      throw error;
    }
  },
};
const showModule: Module<IShowState, IState> = {
  namespaced: true,
  state: mainState,
  getters,
  mutations,
  actions,
};

export default showModule;
