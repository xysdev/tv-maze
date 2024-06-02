import { InjectionKey } from 'vue';
import { Store, createStore } from 'vuex';
import { IState } from '@/interfaces';
import showsModule from './modules/shows';

export const key: InjectionKey<Store<IState>> = Symbol('store-key');

export default createStore<IState>({
  modules: {
    shows: showsModule,
  },
});
