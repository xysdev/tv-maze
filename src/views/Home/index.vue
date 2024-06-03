<template>
  <div v-if="!loading">
    <HeroSection :show="selectedShow" />
    <GenereSelection
      v-for="(title, key) in showGenre"
      :key="key"
      :shows="showsByGenere[title]"
      :title="title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import HeroSection from '@/components/HeroSection.vue';
import { IShow, IState } from '@/interfaces';
import GenereSelection from '@/components/GenereSelection.vue';
import showGenre from '@/utils/showGeneres';

export default defineComponent({
  name: 'Home',
  components: {
    HeroSection,
    GenereSelection,
  },
  setup() {
    const store = useStore<IState>();
    const shows = computed<IShow[]>(() => store.getters['shows/getShows']);
    const showsByGenere = computed(() => store.getters['shows/getShowsByGenre']);
    const loading = computed<boolean>(() => store.getters['shows/getLoading']);
    const selectedShow = computed<IShow>(
      () => shows.value[Math.floor(Math.random() * shows.value.length)],
    );

    return {
      showsByGenere,
      showGenre,
      selectedShow,
      loading,
    };
  },
});
</script>

<style scoped>
.carousel__icon {
  color: #fff !important;
}
</style>
