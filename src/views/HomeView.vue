<template>
  <AppNavbar />
  <HeroSection v-if="selectedShow" :show="selectedShow" />
  <div v-for="(title, key) in showGenre" :key="key">
    <GenereSelection :shows="showsByGenere[key]" :title="title" />
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store'; // Adjust the path according to your folder structure
import AppFooter from '@/components/AppFooter.vue';
import HeroSection from '@/components/HeroSection.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import { Show } from '@/interfaces/show';
import GenereSelection from '@/components/GenereSelection.vue';
import showGenre from '@/utils/showGeneres';

export default defineComponent({
  name: 'HomeView',
  components: {
    AppNavbar,
    HeroSection,
    AppFooter,
    GenereSelection,
  },
  setup() {
    const store = useStore<State>();
    const shows = computed<Show[]>(() => store.getters['shows/getShows']);
    const showsByGenere = computed(() => store.getters['shows/getShowsByGenre']);
    const selectedShow = computed<Show>(
      () => shows.value[Math.floor(Math.random() * shows.value.length)],
    );

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
      showsByGenere,
      loadShows,
      showGenre,
      selectedShow,
    };
  },
});
</script>

<style scoped>
.carousel__icon {
  color: #fff !important;
}
</style>
