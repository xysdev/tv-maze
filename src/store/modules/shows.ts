import { createStore, Module, ActionContext } from 'vuex';
import axios from 'axios';
import { Show } from '@/interfaces/show';

interface State {
  shows: Show[];
  showsByGenre: { [genre: string]: Show[] };
}

const mainState: State = {
  shows: [],
  showsByGenre: {},
};

const getters = {
  getShows(state: State): Show[] {
    return state.shows;
  },
  getShowsByGenre(state: State): { [genre: string]: Show[] } {
    return state.showsByGenre;
  },
};

const mutations = {
  setShows(state: State, shows: Show[]) {
    state.shows = shows;
  },
  setShowsByGenre(state: State, showsByGenre: { [genre: string]: Show[] }) {
    state.showsByGenre = showsByGenre;
  },
  categorizeShowsByGenre(state: State) {
    const categorizedShows = state.shows.reduce((acc, show) => {
      show.genres.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = [];
        }
        acc[genre].push(show);
      });
      return acc;
    }, {} as { [genre: string]: Show[] });

    state.showsByGenre = categorizedShows;
  },
};

const actions = {
  async fetchShows({ commit }: ActionContext<State, any>, page = 0): Promise<Show[]> {
    try {
      const response = await axios.get<Show[]>(`https://api.tvmaze.com/shows?page=${page}`);
      const shows = response.data;
      commit('setShows', shows);
      commit('categorizeShowsByGenre');
      return shows;
    } catch (error) {
      console.error('Error fetching shows:', error);
      throw error;
    }
  },
};

const showModule: Module<State, any> = {
  namespaced: true,
  state: mainState,
  getters,
  mutations,
  actions,
};

export default showModule;
