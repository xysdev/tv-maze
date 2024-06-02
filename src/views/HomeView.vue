<template>
  <HeroSection v-if="selectedShow" :show="selectedShow" />
  <div v-for="(title, key) in showGenre" :key="key">
    <GenereSelection :shows="showsByGenere[key]" :title="title" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import HeroSection from '@/components/HeroSection.vue';
import { IShow, IState } from '@/interfaces';
import GenereSelection from '@/components/GenereSelection.vue';
import showGenre from '@/utils/showGeneres';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    GenereSelection,
  },
  setup() {
    const store = useStore<IState>();
    const shows = computed<IShow[]>(() => store.getters['shows/getShows']);
    const showsByGenere = computed(() => store.getters['shows/getShowsByGenre']);
    const selectedShow = computed<IShow>(
      () => shows.value[Math.floor(Math.random() * shows.value.length)],
    );

    return {
      showsByGenere,
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
