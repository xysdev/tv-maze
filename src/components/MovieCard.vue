<template>
  <div class="movie-card">
    <img :src="movie.image" :alt="movie.title" />
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
});
</script>

<style scoped>
.movie-card {
  width: 200px;
  margin: 1rem;
  text-align: center;
  color: #fff;
}

img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

h3 {
  margin: 0.5rem 0;
}

p {
  font-size: 0.875rem;
}
</style>
