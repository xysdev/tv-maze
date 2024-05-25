<template>
  <div>
    <AppNavbar />
    <HeroSection />
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import MovieCard from '@/components/MovieCard.vue';
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    AppNavbar,
    HeroSection,
    MovieCard,
    AppFooter,
  },
  data() {
    return {
      movies: [
        { id: 1, title: 'Movie 1', description: 'Description 1' },
        { id: 2, title: 'Movie 2', description: 'Description 2' },
        // Add more movie data
      ],
    };
  },
});
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
