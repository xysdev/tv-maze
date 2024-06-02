import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import './styles/index.scss';

createApp(App).use(store).use(router).use(store, key)
  .mount('#app');
