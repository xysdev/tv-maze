import { Module, ActionContext } from 'vuex';
import {
  IShow,
  ISelectedShow,
  IState,
  IShowState,
  IEpisode,
  IActor,
  ISeason,
  ISearchResult,
} from '@/interfaces';

import sanitizeString from '@/utils/sanitizer';
import {
  fetchSearchResults,
  fetchShowById,
  fetchShows,
  fetchShowsCastById,
  fetchShowsEpisodesById,
} from '@/api/showsAPI';

const mainState: IShowState = {
  shows: [],
  showsByGenre: {},
  selectedShow: {} as ISelectedShow,
  searchedShows: [],
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
  getSearchResults(state: IShowState): IShow[] {
    return state.searchedShows;
  },
};

/// TODO: encapsulate the mutations in a single object

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
  setSearchResults(state: IShowState, searchResults: ISearchResult[]) {
    const shows = searchResults.map((searchResult) => searchResult.show);
    state.searchedShows = shows;
  },
  categorizeShowsByGenre(state: IShowState) {
    // this snippet will create the categorized shows by genre array
    // this appraoch is useed because api does not provide the shows by genre
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
    state.loading = false;
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
      const shows = await fetchShows(page);
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
  async fetchSearchResults(
    { commit }: ActionContext<IShowState, IState>,
    query: string,
  ): Promise<void> {
    try {
      commit('setShowsLoading', true);
      const searchResults = await fetchSearchResults(query);
      commit('setSearchResults', searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
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
