import { InjectionKey } from 'vue';
import { Store, createStore } from 'vuex';
import { Show } from '@/interfaces/show';
import showsModule from './modules/shows';

export interface State {
  shows: Show
}

export const key: InjectionKey<Store<State>> = Symbol('store-key');

export default createStore<State>({
  modules: {
    shows: showsModule,
  },
});
