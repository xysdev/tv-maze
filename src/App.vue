<template>
  <Navbar />
  <router-view />
  <AppFooter />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from './layout/Navbar/index.vue';
import AppFooter from './components/AppFooter.vue';
import { IState } from './interfaces';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    AppFooter,
  },
  setup() {
    const store = useStore<IState>();

    const loadShows = async () => {
      try {
        await store.dispatch('shows/fetchShows');
      } catch (error) {
        console.error('Failed to load shows:', error);
      }
    };

    onMounted(() => {
      loadShows();
    });
    return {
      loadShows,
    };
  },
});
</script>
